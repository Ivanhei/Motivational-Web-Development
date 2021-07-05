// Types
import { MultipleChoiceTranslateProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { ProblemUIArguments } from "./types";

export interface MultipleChoiceTranslateUIArguments extends ProblemUIArguments {
  challenge: MultipleChoiceTranslateProblem,
}

// Strings
import { quizStringsPack } from "@/common/Strings/quiz";

// SubComponents
import { TranslateQuestionArea } from "./QuestionArea/Translate";
import { checkMultipleChoiceAnswer, MultipleChoiceAnswerArea } from "./AnswerArea/MultipleChoice";

export function MultipleChoiceTranslateInstruction({
  lang,
}: {
  lang: LanguageTag,
}) {
  return <div className="instruction">
    {quizStringsPack[lang].instruction_mc_translate}
  </div>;
}

export function MultipleChoiceTranslateUI({
  lang,
  challenge,
  currentAnswer,
  onAnswerChange,
  answerState,
}: MultipleChoiceTranslateUIArguments) {
  
  return <div className="session quizStyles question_container">
    <MultipleChoiceTranslateInstruction lang={lang}/>
    <TranslateQuestionArea
      question={challenge.question}
      primary={challenge.sentence?.japanese}
      secondary={challenge.sentence?.english}
      image_url={challenge.image_url} />
    <MultipleChoiceAnswerArea
      options={challenge.options}
      selected={currentAnswer}
      onChange={onAnswerChange}
      answerState={answerState}
    />
  </div>
}

const MultipleChoiceTranslate = {
  UI: MultipleChoiceTranslateUI,
  checkAnswer: checkMultipleChoiceAnswer,
}

export default MultipleChoiceTranslate;
