import {
  Problem,
} from '@/common/Problems/Types'

import {
  AnswerState,
  NextEventHandler,
  ValueChangeEventHandler,
} from '@/common/UI/Types'

import {
  LanguageTag,
} from "@/common/Strings/Types";

export interface ProblemUIArguments {
  lang: LanguageTag,
  challenge: Problem,
  currentAnswer: string,
  onNext: NextEventHandler,
  onAnswerChange: ValueChangeEventHandler,
  answerState: AnswerState,
};

export type ProblemUI = (args: ProblemUIArguments) => JSX.Element
export type ProblemAnswerChecker = (value: any, reference_answer: any) => boolean

export default interface ProblemComponent {
    UI: ProblemUI,
    checkAnswer: ProblemAnswerChecker,
}
