// Types
import { SpellingTranslateProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { ProblemUIArguments } from "./types";

export interface SpellingTranslateUIArguments extends ProblemUIArguments {
  challenge: SpellingTranslateProblem,
}

// Strings
import { quizStringsPack } from "@/common/Strings/quiz";

// SubComponents
import { TranslateQuestionArea } from "./QuestionArea/Translate";
import { checkSpellingAnswer, SpellingAnswerArea } from "./AnswerArea/Spelling";

// utils
import { replaceBraketWithText } from "@/common/utils";

export function SpellingTranslateInstruction({
  lang,
  question,
}: {
  lang: LanguageTag,
  question: string,
}) {
  return <div className="instruction">
    {replaceBraketWithText(quizStringsPack[lang].instruction_spelling_translate, question)}
  </div>;
}

export function SpellingTranslateUI({
  lang,
  challenge,
  currentAnswer,
  onAnswerChange,
  answerState,
}: SpellingTranslateUIArguments) {
  
  return <div className="session quizStyles question_container">
    <SpellingTranslateInstruction
      lang={lang}
      question={challenge.question}/>
    <TranslateQuestionArea
      question={challenge.question}
      primary={challenge.sentence?.japanese}
      secondary={challenge.sentence?.english}
      image_url={challenge.image_url} />
    <SpellingAnswerArea
      value={currentAnswer}
      onChange={onAnswerChange}
      answerState={answerState}
    />
  </div>
}

const SpellingTranslate = {
  UI: SpellingTranslateUI,
  checkAnswer: checkSpellingAnswer,
}

export default SpellingTranslate;
