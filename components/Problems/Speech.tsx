// Types
import { SpeechProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { ProblemUIArguments } from "./types";

export interface SpeechUIArguments extends ProblemUIArguments {
  challenge: SpeechProblem,
}

// Strings
import { quizStringsPack } from "@/common/Strings/quiz";

// SubComponents
import { SpeechQuestionArea } from "./QuestionArea/Speech";
import { checkSpeechAnswer, SpeechAnswerArea } from "./AnswerArea/Speech";

// utils
import { replaceBraketWithText } from "@/common/utils";
import { useMemo, useState } from "react";

export function SpeechInstruction({
  lang,
  question,
  question_en,
}: {
  lang: LanguageTag,
  question: string,
  question_en: string,
}) {
  return <div className="instruction">
    {lang === "en" ?
      replaceBraketWithText(quizStringsPack["en"].instruction_speech, question_en)
      :
      replaceBraketWithText(quizStringsPack["jp"].instruction_speech, question)
    }
  </div>;
}

export function SpeechUI({
  lang,
  challenge,
  onAnswerChange,
  onNext,
  answerState,
}: SpeechUIArguments) {

  // TODO: use context (or other methods) to share data between subcomponents,
  //       without too much involvement from the parent component.
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [listening, setListening] = useState(false);

  const word = useMemo(() => {
    const word = challenge.answer.toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1)
  }, [challenge.answer]);

  return <div className="session quizStyles question_container">
    <SpeechInstruction 
      lang={lang} 
      question={challenge.question} 
      question_en={word}/>
    <SpeechQuestionArea
      word={word}
      audio_url={challenge.audio_url}
      listeningToSpeech={listening}
      onPlayingStateChange={setAudioPlaying}/>
    <SpeechAnswerArea
      lang={lang}
      answer={challenge.answer}
      onNext={onNext}
      onChange={onAnswerChange}
      answerState={answerState}
      audioPlaying={audioPlaying}
      onListeningStateChange={setListening}
    />
  </div>
}

const Speech = {
  UI: SpeechUI,
  checkAnswer: checkSpeechAnswer,
}

export default Speech;
