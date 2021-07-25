import Link from 'next/link';
import Head from 'next/head';

import { CrossIcon } from '@/assets/Icons'

import {
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";

import Login from '@/components/Login';
import Challenge from '@/components/Challenge';
import Congratulations from '@/components/Congratulations';
import LoadingLayout from '@/components/LoadingLayout';

import {
  BehaviorSubject,
  combineLatest,
  from,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';

import {
  distinctUntilChanged,
  filter,
  first,
  map,
  mergeAll,
  mergeMap,
  share,
  tap,
  withLatestFrom,
} from "rxjs/operators";

import * as problemOperators from '@/common/Problems/Operators'

import * as tropyOperators from '@/common/Tropies/Operators'

import firebase from '@/common/firebase_init';
import 'firebase/firestore';
import {
  removeUnwantedItems,
  shuffle,
  useUserSubject,
} from '@/common/utils';

import { SessionResult, TopicDocRefNoMiss, Tropy, TropyInterface } from '@/common/Tropies/Types';

const db = firebase.firestore();

export default function QuizApp(props) {
  const topic = props.topic;

  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [progress, setProgress] = useState(0);

  const [challenges, setChallenges] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const subjectFinishQuizSignal = useMemo(() => new Subject<void>(), []);
  const subjectUser = useUserSubject();
  const subjectClearedTopicRefs = useMemo(() => new Subject<Array<TopicDocRefNoMiss>>(), []);

  //const [tropies, setTropies] = useState<Array<Tropy> | null>(null);
  const subjectTrophies = useMemo(() => new Subject<Array<Tropy>>(), []);
  const noMiss = useRef(true);

  useEffect(() => {
    if (loaded && pageNum === numPages) {
      subjectFinishQuizSignal.next();
    }
  }, [loaded, pageNum, numPages, subjectFinishQuizSignal]);

  // fetching problems
  useEffect(() => {
    // subjects
    const subjectFinishedTopic = new Subject<boolean>();

    const subjectTopicFinishedProblems = subjectUser
      .pipe(filter(user => !!user))
      .pipe(first())
      // only need user info once, will complete after 1 item ;)
      .pipe(mergeMap(user => firebase.firestore()
        .collection('users').doc(user.uid)
        .collection('finishedProblems').doc(topic.id)
        .get()))
      .pipe(problemOperators.convertDocSnapshotToDoc)
      .pipe(share())

    const subjectTopicDoc = new Subject<any>();

    const subjectTopicProblemRefs = subjectTopicDoc
      .pipe(map((topic: any) => topic.problems))

    const subjectProblemsDocRefArray = combineLatest([
      subjectTopicFinishedProblems.pipe(map(doc => doc.problems)),
      subjectTopicProblemRefs
    ])
      .pipe(map(([doneProblemRefs, allProblemRefs]) => {
        const numberOfNewProblems = 8;
        const numberOfDoneProblems = 2;
        const numberOfProblems = numberOfNewProblems + numberOfDoneProblems;

        // if no problems in the topic
        if (!allProblemRefs)
          return [];

        // if user never solved a problem from this topic.
        if (!doneProblemRefs) {
          return problemOperators.rawRandomSelectNFromArray(numberOfProblems)(allProblemRefs);
        }

        // select 10 problems.
        // new : done =  8 : 2
        const notDoneProblemRefs = removeUnwantedItems(allProblemRefs, doneProblemRefs)

        const unfinishedProblems = problemOperators.rawRandomSelectNFromArray(numberOfNewProblems)(notDoneProblemRefs)
        const   finishedProblems = problemOperators.rawRandomSelectNFromArray(numberOfDoneProblems)(  doneProblemRefs)
        const notDoneProblemsRefsLeftOver = removeUnwantedItems(notDoneProblemRefs, unfinishedProblems)
        const    doneProblemsRefsLeftOver = removeUnwantedItems(   doneProblemRefs,   finishedProblems)
        const problems = [...unfinishedProblems, ...finishedProblems];

        while (problems.length < numberOfProblems) {
          if (notDoneProblemsRefsLeftOver.length > 0)
            problems.push(notDoneProblemsRefsLeftOver.splice(0, 1)[0])
          else if (doneProblemsRefsLeftOver.length > 0)
            problems.push(doneProblemsRefsLeftOver.splice(0, 1)[0])
          else
            break;
        }

        if (notDoneProblemsRefsLeftOver.length === 0) {
          subjectFinishedTopic.next(true);
          subjectFinishedTopic.complete();
        }
        else {
          subjectFinishedTopic.next(false);
          subjectFinishedTopic.complete();
        }

        return problems;
      }))
      .pipe(map(array => shuffle(array)))
      .pipe(share())

    /// fetches the problems as an array
    const subjectProblems = subjectProblemsDocRefArray
      .pipe(problemOperators.convertDocRefArrayToDocSnapshotArray)
      .pipe(problemOperators.convertDocSnapshotArrayToDocs)
      .pipe(map(docs => docs.map(doc => { // random shuffle MC answers also
        if (!doc.options || !Array.isArray(doc.options)) return doc;
        return {...doc, options: shuffle(doc.options)}
      })))
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
      combineLatest([
        subjectTopicDoc,
        subjectTopicFinishedProblems
          .pipe(map(topic => topic.noMiss === undefined || topic.noMiss === null ? true : topic.noMiss)),
        subjectProblemsDocRefArray,
        subjectUser,
        subjectFinishQuizSignal,
      ])
        .pipe(filter(([topicDoc, topicNoMiss, problemsDocRefArray, user, finish]) => !!user))
        .pipe(first()) // only save the problems once ;)
        .subscribe(([topicDoc, topicNoMiss, problemsDocRefArray, user]) => {
          firebase.firestore()
            .collection('users').doc(user.uid)
            .collection('finishedProblems').doc(topicDoc.id)
            .set({
              topic: topicDoc._ref,
              problems: firebase.firestore.FieldValue.arrayUnion(...problemsDocRefArray),
              noMiss: topicNoMiss && noMiss.current,
            }, { merge: true });
        })
    );

    subscriptions.add(
      combineLatest([subjectTopicDoc, subjectUser, subjectFinishedTopic])
        .pipe(filter(([topicDoc, user, finished]) => finished))
        .subscribe(([topicDoc, user]) => {
          firebase.firestore()
            .collection('users').doc(user.uid)
            .set({
              finishedTopics: firebase.firestore.FieldValue.arrayUnion(topicDoc._ref),
            }, { merge: true })
        })
    )

    subscriptions.add(
      combineLatest([subjectTopicDoc, subjectUser, subjectFinishedTopic])
        .pipe(mergeMap(async ([topicDoc, user, finished]) => 
          [topicDoc, user, await firebase.firestore()
            .collection('users').doc(user.uid)
            .get(), finished]
        ))
        .pipe(mergeMap(([topicDoc, user, userDoc, finished]) => {
          const clearedTopics = (userDoc.data().finishedTopics as Array<firebase.firestore.DocumentReference>)
          if (finished && !clearedTopics.some(topic => topic.isEqual(topicDoc._ref)))
            clearedTopics.push(topicDoc._ref)

          // Promise.all("array of Promise of [topicRef, boolean]")
          return Promise.all(clearedTopics.map(topicRef => 
            firebase.firestore()
              .collection('users').doc(user.uid)
              .collection('finishedProblems').doc(topicRef.id)
              .get()
              .then(doc => {
                return {
                  ref: topicRef, 
                  noMiss: doc.data() === null ? true : doc.data().noMiss
                } as TopicDocRefNoMiss;
              })
          ))
        }))
        .subscribe(subjectClearedTopicRefs)
    )

     // make it hot after all circuitry completed.
    subscriptions.add(from(topic.get())
      // since promise only has one value, this will complete after promise is resolved.
      .pipe(problemOperators.convertDocSnapshotToDoc)
      .subscribe(subjectTopicDoc));

    // make it hot after all circuitry completed.
    subscriptions.add(from(db.collection('trophies').get())
      .pipe(problemOperators.convertQuerySnapshotToDocs)
      .pipe(map(tropyOperators.convertTropyDocsToTropies))
      .subscribe(subjectTrophies));

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectClearedTopicRefs, subjectFinishQuizSignal, subjectTrophies, subjectUser, topic]);

  // timer
  const timeStart = useRef<number>(null);
  const [totalTime, setTotalTime] = useState<number>(null); // ms
  const subjectTotalTime = useMemo(() => new ReplaySubject<number>(1), [])
  useEffect(() => {
    // page start
    if (loaded && pageNum === 0) {
      timeStart.current = Date.now();
    }
  }, [loaded, pageNum]);

  useEffect(() => {
    // subscriptions
    const subscriptions = new Subscription();

    subscriptions.add(subjectFinishQuizSignal.subscribe(() => {
      if (timeStart.current != null) {
        const time = (Date.now() - timeStart.current) / 1000;
        setTotalTime(time)
        subjectTotalTime.next(time)
      }
    }))

    subscriptions.add(
      combineLatest([
        subjectTrophies,
        subjectTotalTime, // only have value when finished a quiz
        subjectUser,
        subjectClearedTopicRefs, // TODO: no-miss logic for mutiple topics
      ])
        .pipe(filter(([tropies]) => !!tropies && (tropies.length > 0)))
        .pipe(filter(([tropies, time]) => !!time))
        .subscribe(([tropies, clearTime, user, finishedTopicsPairs]) => {
          const sessionResult: SessionResult = {
            clearTime,
            noMiss: noMiss.current,
            finishedTopics: finishedTopicsPairs,

            sessionFinish: true,
            login: !!user,
          }

          tropies.forEach(tropy => {
            console.log(tropy.check(sessionResult), tropy.color, tropy.name, tropy.condition)
          })
        })
    )

    return () => {
      subscriptions.unsubscribe();
    }
  }, [subjectClearedTopicRefs, subjectFinishQuizSignal, subjectTotalTime, subjectTrophies, subjectUser])

  return (
    <div className="app-container">
      <Head>
        <title>Quiz</title>
      </Head>

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

      {
        showLogin                     ? <Login/> :
        !loaded                       ? <LoadingLayout/> :
        pageNum === challenges.length ? <Congratulations totalTime={totalTime}/> :
        <Challenge
          challenge={challenges[pageNum]}
          isLastQuestion={pageNum === numPages - 1}
          onCorrect={() => {
            setProgress((progress) => progress + 1 / numPages);
          }}
          onNext={(isCorrect: boolean) => {
            if (!isCorrect) noMiss.current = false

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
      }
    </div>
  );
}
