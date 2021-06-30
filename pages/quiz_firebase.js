import Link from 'next/link';

import styles from '@/styles/quiz.module.css'
import {getRandomFromArray} from '@/common/utils';

import correctAudioFile from '@/assets/sounds/correct_2.mp3'
import incorrectAudioFile from '@/assets/sounds/incorrect_2.mp3'
import celebrationAudioFile from '@/assets/sounds/finish.wav'

import { Cross as CrossIcon, Play as PlayIcon } from '@/assets/Icons'

import firebase from '@/common/firebase_init';
import "firebase/firestore";
import "firebase/storage";

import {
  useState,
  useEffect,
  Fragment,
} from "react";

import {from} from 'rxjs'
import {
  map,
  mergeMap,
} from "rxjs/operators";

const db = firebase.firestore();
const storage = firebase.storage();

// operators for transforming incoming questions
const operatorConvertQuerySnapshotToDocs = map((querySnapshot) =>
  querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))
);

const operatorRandomSelectNFromArray = (n) =>
  map((array) => array.length > n ? getRandomFromArray(array, n) : array)

const operatorFetchAudioURLForDocs = mergeMap(async (docs) => 
  Promise.all(
    docs.map((doc) =>
      storage
        .ref()
        .child(doc.audio)
        .getDownloadURL()
        .then((url) => ({
          ...doc,
          audio_url: url
        }))
        .catch((err) => {
          console.error("Error while getting Audio URL. ", err.code);

          // still return the doc without the audio url
          return doc;
        })
    )
  )
)

const subscribe10RandomQuestions = () => {
  return from(db.collection('problems').get())
    .pipe(operatorConvertQuerySnapshotToDocs)
    .pipe(operatorRandomSelectNFromArray(10))
    .pipe(operatorFetchAudioURLForDocs);
}

// state
const NOT_ANSWERED_YET = -1;
const ANSWER_INCORRECT = 0;
const ANSWER_CORRECT = 1;

const Challenge = (props, ref) => {
  const challenge = props.challenge;
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [disabledChoice, setDisabledChoice] = useState([]);

  function checkAnswer() {
    if (challenge.type === "mc") return challenge.answer === answer;
    else return challenge.answer.toLowerCase() === answer.toLowerCase();
  }
  const [answerState, setAnswerState] = useState(NOT_ANSWERED_YET);

  function handleAnswerClick() {
    if (answerState !== NOT_ANSWERED_YET) return;
    const answer_state = checkAnswer()
      ? ANSWER_CORRECT
      : ANSWER_INCORRECT;
    setAnswerState(answer_state);
    if (answer_state == ANSWER_CORRECT) props.onCorrect();
  }

  function handleHintClick() {
    setShowHint((sh) => !sh);
  }

  function handleNextClick() {
    setAnswer("");

    // change to next page
    props.onNext(answerState === ANSWER_CORRECT);
    setAnswerState(NOT_ANSWERED_YET);
  }

  // word audio
  const wordAudio = new Audio(challenge.audio_url);

  function playWordAudio() {
    wordAudio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      });
  }

  useEffect(() => {
    playWordAudio();
  }, [challenge]);

  // sound effects
  const correctAudio = new Audio(correctAudioFile);
  const incorrectAudio = new Audio(incorrectAudioFile);
  
  correctAudio.volume = 0.1;
  incorrectAudio.volume = 0.1;

  useEffect(() => {
    if (answerState === ANSWER_CORRECT) {
      correctAudio.play();
    } else if (answerState === ANSWER_INCORRECT) {
      incorrectAudio.play();
    }
  }, [answerState]);

  return (
    <Fragment>
      <div className="flex-grow text-center p-10 px-40 lg:px-60 xl:px-80">
        <h2>{/*challenge.prompt.main_text*/}</h2>
        <div className="mx-32">
          <div className="flex p-10 mb-10 text-3xl">
            {challenge.type === "mc" ? "Select" : "Spell"} the word you heard.
          </div>
          <div>
            {challenge.audio_url ? (
              <div
                className="w-20 mx-auto my-10"
                onClick={(e) => playWordAudio()}
              >
                <PlayIcon/>
              </div>
            ) : (
              <div style={{ color: "red" }}>
                Error while fetching audio.
              </div>
            )}
          </div>
          <div>
            <div
              style={{
                marginTop: 10,
                marginBottom: 10
              }}
            >
              {challenge.type === "mc" ? (
                challenge.options.map((option, i) => (
                  <button
                    className={
                      "" +
                      (answer === option
                        ? answerState === ANSWER_CORRECT
                          ? "correct"
                          : answerState === ANSWER_INCORRECT
                          ? "incorrect"
                          : "selected"
                        : "")
                    }
                    onClick={(e) => setAnswer(option)}
                    style={{ margin: 10, width: "50%" }}
                    key={i}
                  >
                    {option}
                  </button>
                ))
              ) : (
                // challenges[pageNum].type === "spelling"
                <input
                  onChange={(e) => setAnswer(e.target.value)}
                  className={
                    "" +
                    (answer.length > 0
                      ? answerState === ANSWER_CORRECT
                        ? "correct"
                        : answerState === ANSWER_INCORRECT
                        ? "incorrect"
                        : "answered"
                      : "")
                  }
                  value={answer}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="flex flex-cols align-middle items-center">
          <div className="flex-grow"></div>
          <button className="" onClick={handleHintClick}>
            Hint
          </button>
          <div className="flex-grow"></div>
          {answerState === NOT_ANSWERED_YET ? (
            <button
              className="block"
              onClick={handleAnswerClick}
            >
              answer
            </button>
          ) : (
            <button className="block" onClick={handleNextClick}>
              {props.isLastQuestion ? "Complete Quiz" : "Go to Next"}
            </button>
          )}
          <div className="flex-grow"></div>
        </div>
        <div
          className={
            "flex flex-cols align-middle items-center messageBox correct " +
            (answerState === ANSWER_CORRECT ? "shown" : "")
          }
        >
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          {answerState === NOT_ANSWERED_YET ? (
            <button
              className="block"
              onClick={handleAnswerClick}
            >
              answer
            </button>
          ) : (
            <button className="block" onClick={handleNextClick}>
              {props.isLastQuestion ? "Complete Quiz" : "Go to Next"}
            </button>
          )}
          <div className="flex-grow"></div>
        </div>
        <div
          className={
            "flex flex-cols align-middle items-center messageBox incorrect " +
            (answerState === ANSWER_INCORRECT ? "shown" : "")
          }
        >
          <div className="flex-grow"></div>
          <div className="flex-grow"></div>
          {answerState === NOT_ANSWERED_YET ? (
            <button
              className="block"
              onClick={handleAnswerClick}
            >
              answer
            </button>
          ) : (
            <button className="block" onClick={handleNextClick}>
              {props.isLastQuestion ? "Complete Quiz" : "Go to Next"}
            </button>
          )}
          <div className="flex-grow"></div>
        </div>
      </div>
    </Fragment>
  );
};

const Congratulations = (function (props) {
  const celebrationAudio = new Audio(celebrationAudioFile);
  celebrationAudio.volume = 0.1;

  useEffect(() => {
    celebrationAudio.play();
  }, []);

  return (
    <div>
      <h2>Congratulations!</h2>
      <div>You have completed the quiz!</div>
    </div>
  );
});



export default function App() {
    const [pageNum, setPageNum] = useState(0);
    const [progress, setProgress] = useState(0);

    const [challenges, setChallenges] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const subscriptions = subscribe10RandomQuestions()
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
              if (isCorrect) setPageNum((pageNum) => pageNum + 1);
              else
                setChallenges((challenges) => {
                  // slice the incorrect question out to the end of list,
                  // and do not increment page number
                  const spliced_challenges = challenges.splice(pageNum, 1); // mutates challenges
                  return [...challenges, ...spliced_challenges];
                });
            }}
          />
        ) : (
          <div className="px-40 lg:px-60 xl:px-80 text-center">
            {loaded ? (
              <Congratulations />
            ) : (
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                style={{
                  enableBackground: "new 0 0 50 50",
                  width: "100%",
                  maxWidth: "72px",
                  display: "inline-block"
                }}
              >
                <path
                  fill="#000"
                  d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            )}
          </div>
        )}
      </div>
    );
  }
