// assets
// import correctAudioFile from '@/assets/sounds/correct_2.mp3'
// import incorrectAudioFile from '@/assets/sounds/incorrect_2.mp3'

// libs
import {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useMemo,
} from "react";

import {
  fromEvent,
  merge,
  Subject,
} from 'rxjs';

import {
  debounceTime,
  filter,
} from "rxjs/operators";

// utils
import { getRandomInt, usePath, useSimpleSoundEffect } from '@/common/utils';

// Strings
import { quizStringsPack, QuizStrings } from '@/common/Strings/quiz';

// Types
import { AnswerState } from '@/common/UI/Types';
import { LanguageTag } from '@/common/Strings/Types';

// Problem Components
import ProblemComponent from './Problems/types';
import MultipleChoiceAudio from './Problems/MultipleChoiceAudio';
import MultipleChoiceTranslate from './Problems/MultipleChoiceTranslate';
import SpellingAudio from './Problems/SpellingAudio';
import SpellingTranslate from './Problems/SpellingTranslate';
import Speech from './Problems/Speech';
import MultipleChoiceAbbreviation from "./Problems/MultipleChoiceAbbreviation";
import { ArrowIcon, CrossIcon, TickIcon } from "@/assets/Icons";


export default function Challenge(props, ref) {
  const challenge = props.challenge;
  const [answer, setAnswer] = useState("");
  const [disabledChoice, setDisabledChoice] = useState([]);

  const [answerState, setAnswerState] = useState(AnswerState.NOT_ANSWERED_YET);


  // Problem Type UI + logic
  const problemComponent: ProblemComponent = useMemo(() => {
    if (challenge.type === "mc") {
      return (challenge?.subtype === "translate" ? MultipleChoiceTranslate : (challenge?.subtype === "abbrv" ? MultipleChoiceAbbreviation : MultipleChoiceAudio));
    }
    else if (challenge.type === "spelling") {
      return (challenge?.subtype === "translate" ? SpellingTranslate : SpellingAudio);
    }
    else
      return Speech;
  }, [challenge?.subtype, challenge.type]);


  // sound effects
  const correctAudioFile = usePath("/assets/sounds/correct_2.mp3");
  const incorrectAudioFile = usePath("/assets/sounds/incorrect_2.mp3");

  const correctAudio = useSimpleSoundEffect(correctAudioFile, { volume: .1, });
  const incorrectAudio = useSimpleSoundEffect(incorrectAudioFile, { volume: .1, });


  // callbacks
  const handleAnswerClick = useCallback(function () {
    if (answerState !== AnswerState.NOT_ANSWERED_YET) return;
    const correct = problemComponent.checkAnswer(challenge.answer, answer);

    // update state
    const answer_state = correct ? AnswerState.ANSWER_CORRECT : AnswerState.ANSWER_INCORRECT;
    setAnswerState(answer_state);

    // play sound effect
    if (correct) {
      correctAudio.play();
    } else {
      incorrectAudio.play();
    }

    // trigger event if correct
    if (correct) props.onCorrect();
  }, [answer, answerState, challenge.answer, correctAudio, incorrectAudio, problemComponent, props]);

  const handleNextClick = useCallback(function () {
    // reset answer
    setAnswer("");

    // trigger event for changing to next question
    props.onNext(answerState === AnswerState.ANSWER_CORRECT);

    // change to next page
    setAnswerState(AnswerState.NOT_ANSWERED_YET);
  }, [answerState, props]);

  const toNext = useCallback(function() {
    if (answerState === AnswerState.NOT_ANSWERED_YET)
      handleAnswerClick()
    else 
      handleNextClick()
  }, [answerState, handleAnswerClick, handleNextClick]);

  // keyboard events
  const artificialEnterKeyUps = useMemo(() => new Subject<void>(), [])
  useEffect(() => {
    // inspired by https://stackoverflow.com/a/44186764
    const ENTER_KEYCODE = "Enter";

    const enterKeyUps = fromEvent(document, "keyup")
      .pipe(filter((e: KeyboardEvent) => e.code === ENTER_KEYCODE))

    const subscriptions = merge(artificialEnterKeyUps, enterKeyUps)
    .pipe(debounceTime(50))
    .subscribe((key) => {
      if (answerState === AnswerState.NOT_ANSWERED_YET && answer.length === 0) return;// TODO: CHANGE!!

      toNext();
    });

    return () => {
      subscriptions.unsubscribe();
    };
  }, [answer, answer.length, answerState, artificialEnterKeyUps, challenge.answer, handleAnswerClick, handleNextClick, toNext]);
  // TODO: Make it so that we don't unsubscribe and re-subscribe
  //       everytime (the length of) the answer changes.
  // Well, ... It already does whenever `handleAnswerClick` needs update, 
  //           which is whenever `answer` updates.. So... No use haha


  // auto check answer if question type needs it
  useEffect(() => {
    if (!problemComponent.checkAnswerUponUpdate) return;
    if (answerState !== AnswerState.NOT_ANSWERED_YET) return;

    if (problemComponent.checkAnswer(challenge.answer, answer))
      artificialEnterKeyUps.next();
  }, [answer, answerState, artificialEnterKeyUps, challenge.answer, handleAnswerClick, problemComponent]);


  // UI lang
  const languageTag: LanguageTag = props.language
  const strings: QuizStrings = useMemo(() => quizStringsPack[languageTag], [languageTag])


  return (
    <Fragment>

      <problemComponent.UI 
        lang={languageTag} 
        currentAnswer={answer} 
        challenge={challenge}
        onNext={() => artificialEnterKeyUps.next()}
        onAnswerChange={value => { if (answerState === AnswerState.NOT_ANSWERED_YET) setAnswer(value); }}
        answerState={answerState}/>

      <div className="footer quizStyles">
        <div className="session">
          <div className="flex-grow"></div>
          <button 
            disabled={answerState === AnswerState.NOT_ANSWERED_YET && answer.length === 0}
            onClick={e => artificialEnterKeyUps.next()}
          >{strings.answer_button}</button>
        </div>
        <div className={`advice ${answerState === AnswerState.NOT_ANSWERED_YET ? "" : "shown"} ${answerState === AnswerState.ANSWER_INCORRECT ? "incorrect" : ""}`}>
          <div className="session">
            <div className="indicator">
              {answerState === AnswerState.ANSWER_CORRECT ? <TickIcon/> : <CrossIcon/>}
            </div>
            <div className="flex-grow">
              <div className="primary">
                {answerState === AnswerState.ANSWER_CORRECT ? strings.advice_primary[getRandomInt(strings.advice_primary.length)] : "正解例："}
              </div>
              <div className="secondary">
                {answerState === AnswerState.ANSWER_CORRECT ? strings.advice_primary[getRandomInt(strings.advice_primary.length)] : challenge.answer}
              </div>
            </div>
            <button onClick={e => artificialEnterKeyUps.next()}><ArrowIcon/></button>
          </div>
        </div>
      </div>

    </Fragment>
  );
};
