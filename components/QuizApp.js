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
  withLatestFrom,
} from "rxjs/operators";

import * as problemOperators from '@/common/Problems/Operators'

import firebase from '@/common/firebase_init';
import 'firebase/firestore';
import { observeUser } from '@/common/utils';

export default function QuizApp(props) {
  const topic = props.topic;

  const [numPages, setNumPages] = useState(0);
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
    if (loaded && pageNum === numPages) {
      subjectFinishQuizSignal.next();
    }
  }, [loaded, pageNum, numPages, subjectFinishQuizSignal]);

  // fetching problems
  useEffect(() => {
    // subjects
    const subjectAlreadyDoneProblems = subjectUser
      .pipe(filter(user => !!user))
      .pipe(first())
      // only need user info once, will complete after 1 item ;)
      .pipe(map(user => firebase.firestore()
        .collection('users').doc(user.uid)
        .collection('finishedProblems').doc(topic.id)
        .get()))
      .pipe(mergeMap(a => a))
      .pipe(problemOperators.convertDocSnapshotToDoc)
      .pipe(map(doc => doc.problems))

    const subjectTopicDoc = new Subject();

    const subjectTopicProblemRefs = subjectTopicDoc
      .pipe(map(topic => topic.problems))

    const subjectProblemsDocRefArray = combineLatest([subjectAlreadyDoneProblems, subjectTopicProblemRefs])
      .pipe(map(([doneProblemRefs, allProblemRefs]) => {
        if (!doneProblemRefs) // user did no problems on this topic whatsoever
          return allProblemRefs;

        return allProblemRefs.filter(ref => !doneProblemRefs.some(doneRef => doneRef.isEqual(ref)));
      }))
      .pipe(problemOperators.randomSelectNFromArray(10))

    /// fetches the problems as an array
    const subjectProblems = subjectProblemsDocRefArray
      .pipe(problemOperators.convertDocRefArrayToDocSnapshotArray)
      .pipe(problemOperators.convertDocSnapshotArrayToDocs)
      .pipe(problemOperators.fetchAudioURLForDocs)
      .pipe(problemOperators.fetchImageURLForDocs)

    // subscriptions
    const subscriptions = new Subscription();
    subscriptions.add(subjectProblems
      .subscribe((challenges) => {
        setChallenges(challenges);
        setLoaded(true);
      })
    );

    // set number of pages
    subscriptions.add(subjectProblemsDocRefArray.subscribe(problemRefs => setNumPages(problemRefs.length)));

    // set login
    subscriptions.add(subjectUser.subscribe(user => setShowLogin(!user)));

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

     // make it hot after all circuitry completed.
    subscriptions.add(from(topic.get())
      // since promise only has one value, this will complete after promise is resolved.
      .pipe(problemOperators.convertDocSnapshotToDoc)
      .subscribe(subjectTopicDoc));

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectFinishQuizSignal, subjectUser, topic]);

  return (
    <div className="app-container">

      <nav className="session progressNav">
        <div style={{opacity: loaded ? 1 : 0,}} className="progressBar">
          <div style={{width: progress * 100 + "%",}} className="progress"></div>
        </div>
        <div className="cross">
          <Link href="/">
            <a><CrossIcon/></a>
          </Link>
        </div>
      </nav>

      {showLogin ? <Login/> : loaded ? pageNum < challenges.length ? (
        <Challenge
          challenge={challenges[pageNum]}
          isLastQuestion={pageNum === numPages - 1}
          onCorrect={() => {
            setProgress((progress) => progress + 1 / numPages);
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
      ) : <Congratulations/> : <LoadingLayout/>}
    </div>
  );
}
