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

import { en, jp } from '@/common/Strings/quiz';

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

  // UI lang
  const strings = useMemo(() => jp, [])

  return (
    <Fragment>

      <div className="session question_container">
        <div className="instruction">{
          challenge.type === "mc" ? 
          strings.instruction_mc_audio : 
          strings.instruction_spelling_audio
        }</div>
        <div className="question_area audio">
          <div className="playbutton" onClick={(e) => playWordAudio()}>
            <PlayIcon/>
          </div>
        </div>
        {challenge.type === "mc" ? 
          <div className="answer_area options">
            {challenge.options.map((option, i) => (
              <button
                className={
                  "option " +
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
            ))}
          </div>
        :
          <div className="answer_area input_container">
            <input
              autoComplete="off" autoCorrect="off"
              autoCapitalize="off" spellCheck="false" 
              onChange={(e) => setAnswer(e.target.value)}
              className={
                "input " +
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
          </div>
        }
      </div>
      
      <div className="footer">
        <div className="session">
          <button onClick={handleHintClick}>{strings.hint_button}</button>
          <div className="flex-grow"></div>
          <button onClick={handleAnswerClick}>{strings.answer_button}</button>
        </div>
        <div className={`advice ${answerState === NOT_ANSWERED_YET ? "" : "shown"}`}>
          <div className="session">
            <div className="flex-grow"></div>
            <button onClick={handleNextClick}>Next Question</button>
          </div>
        </div>
      </div>

    </Fragment>
  );
};
