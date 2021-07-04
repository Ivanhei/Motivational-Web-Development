// assets
import correctAudioFile from '@/assets/sounds/correct_2.mp3'
import incorrectAudioFile from '@/assets/sounds/incorrect_2.mp3'

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
  filter,
} from "rxjs/operators";

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


export default function Challenge(props, ref) {
  const challenge = props.challenge;
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [disabledChoice, setDisabledChoice] = useState([]);

  const [answerState, setAnswerState] = useState(AnswerState.NOT_ANSWERED_YET);


  // Problem Type UI + logic
  const problemComponent: ProblemComponent = useMemo(() => {
    if (challenge.type === "mc") {
      return (challenge?.subtype === "translate" ? MultipleChoiceTranslate : MultipleChoiceAudio);
    }
    else if (challenge.type === "spelling") {
      return (challenge?.subtype === "translate" ? SpellingTranslate : SpellingAudio);
    }
    else
      return Speech;
  }, [challenge?.subtype, challenge.type]);


  // callbacks
  const handleAnswerClick = useCallback(function () {
    if (answerState !== AnswerState.NOT_ANSWERED_YET) return;
    const answer_state = problemComponent.checkAnswer(challenge.answer, answer)
      ? AnswerState.ANSWER_CORRECT
      : AnswerState.ANSWER_INCORRECT;
    setAnswerState(answer_state);
    if (answer_state == AnswerState.ANSWER_CORRECT) props.onCorrect();
  }, [answer, answerState, challenge.answer, problemComponent, props]);

  const handleHintClick = useCallback(function () {
    setShowHint((sh) => !sh);
  }, []);

  const handleNextClick = useCallback(function () {
    setAnswer("");

    // change to next page
    props.onNext(answerState === AnswerState.ANSWER_CORRECT);
    setAnswerState(AnswerState.NOT_ANSWERED_YET);
  }, [answerState, props]);


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
    if (answerState === AnswerState.ANSWER_CORRECT) {
      correctAudio.currentTime = 0;
      correctAudio.play();
    } else if (answerState === AnswerState.ANSWER_INCORRECT) {
      incorrectAudio.currentTime = 0;
      incorrectAudio.play();
    }
  }, [answerState, correctAudio, incorrectAudio]);


  // keyboard events
  const artificialEnterKeyUps = useMemo(() => new Subject<void>(), [])
  useEffect(() => {
    // inspired by https://stackoverflow.com/a/44186764
    const ENTER_KEYCODE = "Enter";

    const enterKeyUps = fromEvent(document, "keyup")
      .pipe(filter((e: KeyboardEvent) => e.code === ENTER_KEYCODE))

    const subscriptions = merge(artificialEnterKeyUps, enterKeyUps).subscribe((key) => {
      console.log(answer.length)
      if (answer.length === 0) return;

      (answerState === AnswerState.NOT_ANSWERED_YET ? handleAnswerClick : handleNextClick)()
    });

    return () => {
      subscriptions.unsubscribe();
    };
  }, [answer.length, answerState, artificialEnterKeyUps, handleAnswerClick, handleNextClick]);
  // TODO: Make it so that we don't unsubscribe and re-subscribe
  //       everytime (the length of) the answer changes.
  // Well, ... It already does whenever `handleAnswerClick` needs update, 
  //           which is whenever `answer` updates.. So... No use haha


  // UI lang
  const languageTag: LanguageTag = useMemo(() => "jp" as LanguageTag, [])
  const strings: QuizStrings = useMemo(() => quizStringsPack[languageTag], [languageTag])


  return (
    <Fragment>

      <problemComponent.UI 
        lang={languageTag} 
        currentAnswer={answer} 
        challenge={challenge}
        onAnswerChange={value => setAnswer(value)}
        answerState={answerState}/>

      <div className="footer">
        <div className="session">
          <button onClick={handleHintClick}>{strings.hint_button}</button>
          <div className="flex-grow"></div>
          <button disabled={answer.length === 0} onClick={e => artificialEnterKeyUps.next()}>{strings.answer_button}</button>
        </div>
        <div className={`advice ${answerState === AnswerState.NOT_ANSWERED_YET ? "" : "shown"}`}>
          <div className="session">
            <div className="flex-grow"></div>
            <button onClick={e => artificialEnterKeyUps.next()}>Next Question</button>
          </div>
        </div>
      </div>

    </Fragment>
  );
};
