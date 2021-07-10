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
import { useMemo } from "react";

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

  const word = useMemo(() => {
    const word = challenge.answer.toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1)
  }, [challenge.answer]);

  return <div className="session quizStyles question_container">
    <SpeechInstruction 
      lang={lang} 
      question={challenge.question} 
      question_en={word}/>
    <SpeechQuestionArea word={word}/>
    <SpeechAnswerArea
      lang={lang}
      answer={challenge.answer}
      onNext={onNext}
      onChange={onAnswerChange}
      answerState={answerState}
    />
  </div>
}

const Speech = {
  UI: SpeechUI,
  checkAnswer: checkSpeechAnswer,
}

export default Speech;
