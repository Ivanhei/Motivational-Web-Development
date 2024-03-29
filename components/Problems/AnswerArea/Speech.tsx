
import {
  AnswerState,
  BooleanValueChangeEventHandler,
  NextEventHandler,
} from '@/common/UI/Types';

import { MicIcon } from '@/assets/Icons';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { audioBlobToAudio, SimpleRecorder } from '@/common/utils';
import { LanguageTag } from '@/common/Strings/Types';
import { quizStringsPack } from '@/common/Strings/quiz';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';

const appId = '95d35835-5527-45aa-ba1a-0c03ad6bc160';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export function SpeechAnswerArea({
  lang,
  answer,
  onChange,
  onNext,
  answerState,
  audioPlaying,
  onListeningStateChange,
}: {
  lang: LanguageTag,
  answer: string,
  onChange: (value: string) => void,
  onNext: NextEventHandler,
  answerState: AnswerState,
  audioPlaying: boolean,
  onListeningStateChange: BooleanValueChangeEventHandler,
}) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [showRetryText, setShowRetryText] = useState(false)

  useEffect(() => {
    // if the word is found
    const tokenList = transcript.split(/[^a-zA-Z0-9]+/).filter((item: string) => item.length > 0);
    if (tokenList.some((item?: string) => item?.toLowerCase() === answer?.toLowerCase())) {
      resetTranscript();
      setShowRetryText(false)
      SpeechRecognition.stopListening()
      onChange(answer);
    }
    else if (tokenList.length > 0) {
      setShowRetryText(true)
    }
    else {
    }
  }, [answer, onChange, resetTranscript, transcript])

  // reset show retry once new question comes
  useEffect(() => {
    if (answerState === AnswerState.NOT_ANSWERED_YET) {
      setShowRetryText(false)
    }
  }, [answerState])

  useEffect(() => {
    if (!listening) {
      onNext();
    }
  }, [onNext, listening])

  const handleRecordClick = useCallback((e) => {
    if (audioPlaying) return;
    if (answerState !== AnswerState.NOT_ANSWERED_YET) return;

    if (!listening) {
      SpeechRecognition.startListening({ continuous: false })
    }
    else {
      SpeechRecognition.stopListening()
    }
  }, [answerState, audioPlaying, listening]);

  // onListeningStateChange
  useEffect(() => {
    onListeningStateChange(listening);
  }, [listening, onListeningStateChange])

  // stop playing if audio start
  useEffect(() => {
    if (audioPlaying) {
      SpeechRecognition.stopListening()
    }
  }, [audioPlaying])

  // stop playing if answered
  useEffect(() => {
    if (answerState !== AnswerState.NOT_ANSWERED_YET) {
      SpeechRecognition.stopListening()
    }
  }, [answerState])

  return <div className="answer_area speech">
      <button className={`
          ${listening?"recording":""} 
          ${answerState === AnswerState.ANSWER_CORRECT ? "correct" : ""}
          ${answerState === AnswerState.ANSWER_INCORRECT ? "incorrect" : ""}
        `} 
        onClick={handleRecordClick} 
        disabled={!browserSupportsSpeechRecognition || audioPlaying}
        onFocus={(e) => { e.target.blur(); }}
      >
        <MicIcon width="16" height="24"/>
        <span>
          {showRetryText ? quizStringsPack[lang].record_retry_button : quizStringsPack[lang].recording_button}
        </span>
      </button>
      {/*
      {showRetryText ? <div style={{maxWidth: "560px", margin: "2rem auto", fontSize: "1.2em", color: "rgba(var(--color-text-rgb), .5)"}}>聞き取りづらい場合は、文章で読み上げてみてください。
      <div style={{marginTop: "1rem", fontSize: "0.8em"}}>例：「low」の場合は「very low level」または「running low on battery」を読み上げてみてください。</div>
      </div> : null}
      */}
      {!browserSupportsSpeechRecognition ? 
        <div style={{color: "red", marginTop: "1rem"}}>
          This browser does not support speech. 
          Please use Chrome or Safari with Internet coneection.
        </div>
      : ""}
  </div>
}

export function checkSpeechAnswer(current: string, reference: string) {
  return current.toLowerCase() === reference.toLowerCase();
}
