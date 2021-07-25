// Types
import { MultipleChoiceAbbreviationProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { ProblemUIArguments } from "./types";

export interface MultipleChoiceAbbreviationUIArguments extends ProblemUIArguments {
  challenge: MultipleChoiceAbbreviationProblem,
}

// Strings
import { quizStringsPack } from "@/common/Strings/quiz";

// SubComponents
import { AbbreviationQuestionArea } from "./QuestionArea/Abbreviation";
import { checkMultipleChoiceAnswer, MultipleChoiceAnswerArea } from "./AnswerArea/MultipleChoice";

export function MultipleChoiceAbbreviationInstruction({
  lang,
}: {
  lang: LanguageTag,
}) {
  return <div className="instruction">
    {quizStringsPack[lang].instruction_mc_abbreviation}
  </div>;
}

export function MultipleChoiceAbbreviationUI({
  lang,
  challenge,
  currentAnswer,
  onAnswerChange,
  answerState,
}: MultipleChoiceAbbreviationUIArguments) {
  
  return <div className="session quizStyles question_container">
    <MultipleChoiceAbbreviationInstruction lang={lang}/>
    <AbbreviationQuestionArea question={challenge.question} />
    <MultipleChoiceAnswerArea
      options={challenge.options}
      selected={currentAnswer}
      onChange={onAnswerChange}
      answerState={answerState}
    />
  </div>
}

const MultipleChoiceAbbreviation = {
  UI: MultipleChoiceAbbreviationUI,
  checkAnswer: checkMultipleChoiceAnswer,
}

export default MultipleChoiceAbbreviation;
