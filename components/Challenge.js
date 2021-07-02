import { PlayIcon } from '@/assets/Icons'

import correctAudioFile from '@/assets/sounds/correct_2.mp3'
import incorrectAudioFile from '@/assets/sounds/incorrect_2.mp3'
import { useCallback } from 'react';

import {
  useState,
  useEffect,
  Fragment,
  useMemo,
} from "react";

import {
  fromEvent,
} from 'rxjs';

import {
  filter,
} from "rxjs/operators";

// states
const NOT_ANSWERED_YET = -1;
const ANSWER_INCORRECT = 0;
const ANSWER_CORRECT = 1;

export default function Challenge(props, ref) {
  const challenge = props.challenge;
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [disabledChoice, setDisabledChoice] = useState([]);

  const [answerState, setAnswerState] = useState(NOT_ANSWERED_YET);


  // callbacks
  const handleAnswerClick = useCallback(function () {
    function checkAnswer() {
      if (challenge.type === "mc") return challenge.answer === answer;
      else return challenge.answer.toLowerCase() === answer.toLowerCase();
    }

    if (answerState !== NOT_ANSWERED_YET) return;
    const answer_state = checkAnswer()
      ? ANSWER_CORRECT
      : ANSWER_INCORRECT;
    setAnswerState(answer_state);
    if (answer_state == ANSWER_CORRECT) props.onCorrect();
  }, [answer, answerState, challenge.answer, challenge.type, props]);

  const handleHintClick = useCallback(function () {
    setShowHint((sh) => !sh);
  }, []);

  const handleNextClick = useCallback(function () {
    setAnswer("");

    // change to next page
    props.onNext(answerState === ANSWER_CORRECT);
    setAnswerState(NOT_ANSWERED_YET);
  }, [answerState, props]);


  // word audio
  const wordAudio = useMemo(() => {
    return new Audio(challenge.audio_url);
  }, [challenge.audio_url]);

  const playWordAudio = useCallback(function () {
    wordAudio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      });
  }, [wordAudio]);

  useEffect(() => {
    playWordAudio();
  }, [/*challenge, */playWordAudio]);


  // sound effects
  const correctAudio = useMemo(() => {
    const audio = new Audio(correctAudioFile);
    audio.volume = 0.1;
    return audio;
  }, []);
  const incorrectAudio = useMemo(() => {
    const audio = new Audio(incorrectAudioFile);
    audio.volume = 0.1;
    return audio;
  }, []);

  useEffect(() => {
    if (answerState === ANSWER_CORRECT) {
      correctAudio.currentTime = 0;
      correctAudio.play();
    } else if (answerState === ANSWER_INCORRECT) {
      incorrectAudio.currentTime = 0;
      incorrectAudio.play();
    }
  }, [answerState, correctAudio, incorrectAudio]);


  // keyboard events
  useEffect(() => {
    // inspired by https://stackoverflow.com/a/44186764
    const ENTER_KEYCODE = 13;

    const enterKeyUps = fromEvent(document, "keyup")
      .pipe(filter(e => e.keyCode === ENTER_KEYCODE))

    const subscriptions = enterKeyUps.subscribe((key) => {
      (answerState === NOT_ANSWERED_YET ? handleAnswerClick : handleNextClick)()
    });

    return () => {
      subscriptions.unsubscribe();
    };
  }, [answerState, handleAnswerClick, handleNextClick]);

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
