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

import { Tropy, TropyInterface } from '@/common/Tropies/Types';

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

  const [tropies, setTropies] = useState<Array<Tropy> | null>(null);

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

    const subjectTopicDoc = new Subject<any>();

    const subjectTopicProblemRefs = subjectTopicDoc
      .pipe(map((topic: any) => topic.problems))

    const subjectProblemsDocRefArray = combineLatest([subjectAlreadyDoneProblems, subjectTopicProblemRefs])
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
          else
            problems.push(doneProblemsRefsLeftOver.splice(0, 1)[0])
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

    /// tropies
    const subjectTrophies = new Subject<Array<Tropy>>();

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

    // set login
    subscriptions.add(subjectTrophies.subscribe(topies => setTropies(topies)));

    // make it hot after all circuitry completed.
    subscriptions.add(from(db.collection('trophies').get())
      .pipe(problemOperators.convertQuerySnapshotToDocs)
      .pipe(map(tropyOperators.convertTropyDocsToTropies))
      .subscribe(subjectTrophies));

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectFinishQuizSignal, subjectUser, topic]);

  // timer
  const timeStart = useRef<number>(null);
  const [totalTime, setTotalTime] = useState<number>(null); // ms
  useEffect(() => {
    if (!loaded) return;
    // page start
    if (pageNum === 0) {
      timeStart.current = Date.now();
    }

    // page end
    if (pageNum === challenges.length) {
      if (timeStart.current != null) {
        setTotalTime(Date.now() - timeStart.current)
      }

      // TODO: convert to using rxjs and emit "end quiz" signal
      // if (tropies)
      //   console.log(tropies)
      //   // for (const tropy of tropies) {
      //   //   if (tropy.check({})) {
            
      //   //   }
      //   // }
    }

  },[challenges.length, loaded, pageNum, tropies])

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
      }
    </div>
  );
}
