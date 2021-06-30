import Link from 'next/link';

import styles from '@/styles/quiz.module.css'

import { CrossIcon } from '@/assets/Icons'

import firebase from '@/common/firebase_init';
import "firebase/firestore";
const db = firebase.firestore();

import {
  useState,
  useEffect,
} from "react";

import { from } from 'rxjs'

import * as problemOperators from '../common/Problems/Operators'

const subscribe10RandomQuestions = () => {
  return from(db.collection('problems').get())
    .pipe(problemOperators.convertQuerySnapshotToDocs)
    .pipe(problemOperators.randomSelectNFromArray(10))
    .pipe(problemOperators.fetchAudioURLForDocs);
}

import { mergeMap } from 'rxjs/operators'

const getFromTopic = (topicRef) => {
  return from(topicRef.get())
    .pipe(problemOperators.convertDocSnapshotToDoc)
    .pipe(mergeMap(doc => 
      Promise.all(doc.problems.map(problemRef => problemRef.get()))
    ))
    .pipe(problemOperators.convertDocArraySnapshotToDocs)
    .pipe(problemOperators.randomSelectNFromArray(10))
    .pipe(problemOperators.fetchAudioURLForDocs);
}

import Challenge from '@/components/Challenge';
import Congratulations from '@/components/Congratulations';
import LoadingLayout from '@/components/LoadingLayout';

export default function QuizApp(props) {
  const [pageNum, setPageNum] = useState(0);
  const [progress, setProgress] = useState(0);

  const [challenges, setChallenges] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const subscriptions = getFromTopic(props.topic)//subscribe10RandomQuestions()
      .subscribe((challenges) => {
        setChallenges(challenges);
        setLoaded(true);
      });

    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

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
      {pageNum < challenges.length ? (
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
