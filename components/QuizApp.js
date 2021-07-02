import Link from 'next/link';

import styles from '@/styles/quiz.module.css'

import { CrossIcon } from '@/assets/Icons'

import {
  useState,
  useEffect,
  useMemo,
} from "react";

import Login from '@/components/Login';
import Challenge from '@/components/Challenge';
import Congratulations from '@/components/Congratulations';
import LoadingLayout from '@/components/LoadingLayout';

import {
  combineLatest,
  from,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';

import {
  filter,
  first,
  map,
  mergeAll,
  mergeMap,
  tap,
} from "rxjs/operators";

import * as problemOperators from '@/common/Problems/Operators'

import firebase from '@/common/firebase_init';
import 'firebase/firestore';
import { observeUser } from '@/common/utils';

export default function QuizApp(props) {
  const topic = props.topic;

  const [pageNum, setPageNum] = useState(0);
  const [progress, setProgress] = useState(0);

  const [challenges, setChallenges] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const subjectFinishQuizSignal = useMemo(() => new Subject(), []);
  const subjectUser = useMemo(() => new ReplaySubject(1), []);

  useEffect(() => {
    const userObservable = observeUser();
    const subs = userObservable.subscribe(subjectUser);

    return () => {
      subs.unsubscribe();
    };
  }, [subjectUser]);

  useEffect(() => {
    if (loaded && pageNum === challenges.length) {
      subjectFinishQuizSignal.next();
    }
  }, [loaded, pageNum, challenges.length, subjectFinishQuizSignal]);

  // fetching problems
  useEffect(() => {
    // subjects
    const subjectTopicDoc = new Subject();
    const subjectProblemsDocRefArray = new Subject();
    const subjectProblems = from(topic.get())
      .pipe(problemOperators.convertDocSnapshotToDoc)
      .pipe(tap(topic => subjectTopicDoc.next(topic))) // .pipe(tap(subjectTopicDoc))
      .pipe(map(topic => topic.problems))
      .pipe(problemOperators.randomSelectNFromArray(10))
      .pipe(tap(problemRefs => subjectProblemsDocRefArray.next(problemRefs)))
      /// flattens and fetch problems.
      .pipe(mergeAll()) // merges them (flattens the array once)
      .pipe(mergeMap(problemRef => problemRef.get()))
      .pipe(problemOperators.convertDocSnapshotToDoc)
      .pipe(problemOperators.fetchAudioURLForDoc)
      // TODO: onComplete? dispose?

    // subscriptions
    const subscriptions = new Subscription();
    subscriptions.add(subjectProblems
      .subscribe((challenge) => {
        setChallenges(challenges => [...challenges, challenge]);
        setLoaded(true);
      })
    );

    subjectUser.subscribe(user => setShowLogin(!user));

    // (for finish answering all problems: store which questions user finished)
    subscriptions.add(
      combineLatest([subjectTopicDoc, subjectProblemsDocRefArray, subjectUser, subjectFinishQuizSignal])
        .pipe(filter(([topicDoc, problemsDocRefArray, user, finish]) => !!user))
        .pipe(first()) // only save the problems once ;)
        .subscribe(([topicDoc, problemsDocRefArray, user, finish]) => {
          firebase.firestore()
            .collection('users').doc(user.uid)
            .collection('finishedProblems').doc(topicDoc.id)
            .set({
              topic: topicDoc._ref,
              problems: firebase.firestore.FieldValue.arrayUnion(...problemsDocRefArray),
            }, { merge: true });
        })
    );

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectFinishQuizSignal, subjectUser, topic]);

  return (
    <div className="h-screen app-container">
      <nav className="flex py-16 items-center">
        <div className="flex-grow"></div>
        <div
          style={{
            opacity: loaded ? 1 : 0,
          }}
          className={styles.progressBar}
        >
          <div
            style={{
              width: progress * 100 + "%",
            }}
            className={styles.progress}
          />
        </div>
        <div
          className="flex-grow"
          style={{
            height: 20, // for svg icon to get same height as progress bar
            paddingLeft: 40
          }}
        >
          <Link href="/">
            <a><CrossIcon/></a>
          </Link>
        </div>
      </nav>
      {showLogin ? <Login/> : pageNum < challenges.length ? (
        <Challenge
          challenge={challenges[pageNum]}
          isLastQuestion={pageNum === challenges.length - 1}
          onCorrect={() => {
            setProgress((progress) => progress + 1 / challenges.length);
          }}
          onNext={(isCorrect) => {
            if (isCorrect)
              setPageNum((pageNum) => pageNum + 1);
            else
              setChallenges((challenges) => {
                // slice the incorrect question out to the end of list,
                // and do not increment page number
                const spliced_challenges = challenges.splice(pageNum, 1); // mutates challenges
                return [...challenges, ...spliced_challenges];
              });
          }}
        />
      ) : (loaded ? <Congratulations/> : <LoadingLayout/>)}
    </div>
  );
}
