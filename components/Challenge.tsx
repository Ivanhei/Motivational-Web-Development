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
import { usePath } from '@/common/utils';


function useSimpleSoundEffect(url: string, { volume }: { volume?: number } = { volume: 1.0 }) {
  const celebrationAudio = useMemo(() => {
    const audio = new Audio(url);
    audio.volume = volume;
    return audio;
  }, [url, volume]);

  const playCelebrationAudio = useCallback(function () {
    celebrationAudio.currentTime = 0;
    return celebrationAudio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      });
  }, [celebrationAudio]);

  return {
    audio: celebrationAudio,
    play: playCelebrationAudio,
  }
}

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


  // sound effects
  const correctAudioFile = usePath("/assets/sounds/correct_2.mp3");
  const incorrectAudioFile = usePath("/assets/sounds/incorrect_2.mp3");

  const correctAudio = useSimpleSoundEffect(correctAudioFile, { volume: .1, });
  const incorrectAudio = useSimpleSoundEffect(incorrectAudioFile, { volume: .1, });


  // callbacks
  const handleAnswerClick = useCallback(function () {
    if (answerState !== AnswerState.NOT_ANSWERED_YET) return;
    const answer_state = problemComponent.checkAnswer(challenge.answer, answer)
      ? AnswerState.ANSWER_CORRECT
      : AnswerState.ANSWER_INCORRECT;
    setAnswerState(answer_state);

    // play sound effect
    if (answer_state === AnswerState.ANSWER_CORRECT) {
      correctAudio.play();
    } else if (answer_state === AnswerState.ANSWER_INCORRECT) {
      incorrectAudio.play();
    }

    // trigger event if correct
    if (answer_state == AnswerState.ANSWER_CORRECT) props.onCorrect();
  }, [answer, answerState, challenge.answer, correctAudio, incorrectAudio, problemComponent, props]);

  const handleHintClick = useCallback(function () {
    setShowHint((sh) => !sh);
  }, []);

  const handleNextClick = useCallback(function () {
    // reset answer
    setAnswer("");

    // trigger event for changing to next question
    props.onNext(answerState === AnswerState.ANSWER_CORRECT);

    // change to next page
    setAnswerState(AnswerState.NOT_ANSWERED_YET);
  }, [answerState, props]);


  // keyboard events
  const artificialEnterKeyUps = useMemo(() => new Subject<void>(), [])
  useEffect(() => {
    // inspired by https://stackoverflow.com/a/44186764
    const ENTER_KEYCODE = "Enter";

    const enterKeyUps = fromEvent(document, "keyup")
      .pipe(filter((e: KeyboardEvent) => e.code === ENTER_KEYCODE))

    const subscriptions = merge(artificialEnterKeyUps, enterKeyUps).subscribe((key) => {
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
