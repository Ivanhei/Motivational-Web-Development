import Link from 'next/link';

import correctAudioFile from '@/assets/sounds/correct_2.mp3'
import incorrectAudioFile from '@/assets/sounds/incorrect_2.mp3'
import celebrationAudioFile from '@/assets/sounds/finish.wav'

// const correctAudioFile = '@assets/sounds/correct_2.mp3'
// const incorrectAudioFile = '@assets/sounds/incorrect_2.mp3'
// const celebrationAudioFile = '@assets/sounds/finish.wav'

import firebase from '@/common/firebase_init';
import "firebase/firestore";
import "firebase/storage";

import {
  useState,
  useEffect,
  Fragment,
} from "react";

import * as rxjs from "rxjs";
import {
  map,
  mergeMap,
} from "rxjs/operators";

const db = firebase.firestore();
const storage = firebase.storage();

// https://stackoverflow.com/a/19270021
function getRandomFromArray(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
const iconCross = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    /*width="30.708"
    height="30.708"*/
    viewBox="0 0 30.708 30.708"
  >
    <path
      id="Icon_material-close"
      data-name="Icon material-close"
      d="M38.208,10.593,35.115,7.5,22.854,19.761,10.593,7.5,7.5,10.593,19.761,22.854,7.5,35.115l3.093,3.093L22.854,25.947,35.115,38.208l3.093-3.093L25.947,22.854Z"
      transform="translate(-7.5 -7.5)"
      fill="#707070"
    />
  </svg>
);
const useObservable = (observable) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const subscription = observable.subscribe((v) => {
      setValue(v);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable]);

  return value;
};

// state
const NOT_ANSWERED_YET = -1;
const ANSWER_INCORRECT = 0;
const ANSWER_CORRECT = 1;
const subjects = {
  answerState: new rxjs.BehaviorSubject(NOT_ANSWERED_YET),
  answerButton: new rxjs.Subject(),
  nextButton: new rxjs.Subject(),
  hintButton: new rxjs.Subject()
};
const nexts = {
  answerState: (x) => subjects.answerState.next(x),
  answerButton: () => subjects.answerButton.next(),
  nextButton: () => subjects.nextButton.next(),
  hintButton: () => subjects.hintButton.next()
};
const observables = {
  answerState: () => subjects.answerState.asObservable(),
  answerButton: () => subjects.answerButton.asObservable(),
  nextButton: () => subjects.nextButton.asObservable(),
  hintButton: () => subjects.hintButton.asObservable()
};

function PlayIcon() {
  return <svg viewBox="0 0 47 47" fill="#FFDD63" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23.4667 46.9333C36.4269 46.9333 46.9333 36.4269 46.9333 23.4667C46.9333 10.5064 36.4269 0 23.4667 0C10.5064 0 0 10.5064 0 23.4667C0 36.4269 10.5064 46.9333 23.4667 46.9333ZM16.5 34.9965L35.2 24.2L16.5 13.4036V34.9965Z"/>
  </svg>;
}

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

  // //region answerState + setAnswerState replaced with observerable
  // const [answerState, answerStateSetter] = useState(
  //   NOT_ANSWERED_YET
  // );

  // useEffect(() => {
  //   const subscription = //new rxjs.Subscription();
  //     // subscription.add(
  //     observables.answerState().subscribe(answerStateSetter);
  //   // );

  //   // additional: answer button press
  //   subscription.add(
  //     observables.answerButton().subscribe(() => {
  //       handleAnswerClick()
  //     })
  //   );

  //   // additional: next button press
  //   subscription.add(
  //     observables.nextButton().subscribe(() => {
  //       handleHintClick()
  //     })
  //   );

  //   return () => {
  //     console.log("unsub");
  //     subscription.unsubscribe();
  //   };
  // }, []);

  // const setAnswerState = (x) => nexts.answerState(x);
  // //endregion

  // word audio
  const wordAudio = new Audio(challenge.audio_url);

  function playWordAudio() {
    wordAudio.play();
  }

  useEffect(() => {
    playWordAudio();
  }, [challenge]);

  // sound effects
  const correctAudio = new Audio(correctAudioFile);
  const incorrectAudio = new Audio(incorrectAudioFile);
  console.log(correctAudioFile);
  
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
                  onChange={(e) => {
                    setAnswer(event.target.value);
                  }}
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

function AnswerBox(props) {
  return <div></div>;
}

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

    // useEffect(() => {
    //   db.collection("problems")
    //     .get()
    //     .then((querySnapshot) =>
    //       Promise.all(
    //         querySnapshot.docs.map((doc) =>
    //           storage
    //             .ref()
    //             .child(doc.data().audio)
    //             .getDownloadURL()
    //             .then((url) => ({
    //               ...doc.data(),
    //               id: doc.id,
    //               audio_url: url
    //             }))
    //             .catch((err) => {
    //               console.log("Error while getting Audio URL. ", err);

    //               return {
    //                 ...doc.data(),
    //                 id: doc.id
    //               };
    //             })
    //         )
    //       )
    //     )
    //     .then((challenges) => {
    //       console.log(challenges);
    //       setChallenges(challenges);
    //       setLoaded(true);
    //     })
    //     .catch((error) => {
    //       console.error("Error ocurred while parsing challenges. ", error);
    //     });

    //   return () => {};
    // }, []);

    useEffect(() => {
      rxjs
        .from(db.collection("problems").get())
        .pipe(
          map((querySnapshot) =>
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }))
          )
        )
        .pipe(
          mergeMap(async (docs) =>
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
                    console.error("Error while getting Audio URL. ", err);

                    return doc;
                  })
              )
            )
          )
          // mergeMap(async (doc) => {
          //   let url = "";
          //   try {
          //     url = await storage.ref().child(doc.audio).getDownloadURL();
          //   } finally {
          //   }

          //   return {
          //     ...doc,
          //     audio_url: url
          //   };
          // })
        )
        .subscribe((challenges) => {
          setChallenges(
            challenges.length > 10
              ? getRandomFromArray(challenges, 10)
              : challenges
          );
          setLoaded(true);
        });

      return () => {};
    }, []);

    return (
      <div className="h-screen app-container">
        <nav className="flex py-16 items-center">
          <div className="flex-grow"></div>
          <div
            style={{
              height: 20,
              background: "#F1EEEE",
              borderRadius: 10,
              opacity: loaded ? 1 : 0,
              transition: ".5s",
              width: "60%"
            }}
          >
            <div
              style={{
                background: "#7AF16C",
                height: "100%",
                width: progress * 100 + "%",
                borderRadius: 10,
                transition: ".5s"
              }}
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
              <a>{iconCross}</a>
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
