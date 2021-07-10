
import { AnswerState, NextEventHandler } from '@/common/UI/Types';

import { MicIcon } from '@/assets/Icons';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { audioBlobToAudio, SimpleRecorder } from '@/common/utils';
import { LanguageTag } from '@/common/Strings/Types';
import { quizStringsPack } from '@/common/Strings/quiz';

import 'regenerator-runtime/runtime' // for 'react-speech-recognition'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export function SpeechAnswerArea({
  lang,
  answer,
  onChange,
  onNext,
  answerState
}: {
  lang: LanguageTag,
  answer: string,
  onChange: (value: string) => void,
  onNext: NextEventHandler,
  answerState: AnswerState,
}) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // if the word is found
    if (transcript.split(/[^a-zA-Z0-9]+/).some(item => item?.toLowerCase() === answer?.toLowerCase())) {
      resetTranscript();
      onChange(answer);
    }
  }, [answer, browserSupportsSpeechRecognition, onChange, onNext, resetTranscript, transcript])

  useEffect(() => {
    if (!listening) {
      onNext();
    }
  }, [onNext, listening])

  const handleRecordClick = useCallback((e) => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: false })
    }
    else {
      SpeechRecognition.stopListening()
    }
  }, [listening]);

  return <div className="answer_area speech">
      <button className={`
          ${listening?"recording":""} 
          ${answerState === AnswerState.ANSWER_CORRECT ? "correct" : ""}
          ${answerState === AnswerState.ANSWER_INCORRECT ? "incorrect" : ""}
        `} 
        onClick={handleRecordClick} 
        disabled={!browserSupportsSpeechRecognition}
        onFocus={(e) => { e.target.blur(); }}
      >
        <MicIcon width="16" height="24"/><span>{quizStringsPack[lang].recording_button}</span>
      </button>
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
