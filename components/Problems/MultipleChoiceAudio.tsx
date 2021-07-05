// Types
import { MultipleChoiceAudioProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { ProblemUIArguments } from "./types";

export interface MultipleChoiceAudioUIArguments extends ProblemUIArguments {
  challenge: MultipleChoiceAudioProblem,
}

// Strings
import { quizStringsPack } from "@/common/Strings/quiz";

// SubComponents
import { AudioQuestionArea } from "./QuestionArea/Audio";
import { checkMultipleChoiceAnswer, MultipleChoiceAnswerArea } from "./AnswerArea/MultipleChoice";

export function MultipleChoiceAudioInstruction({
  lang,
}: {
  lang: LanguageTag,
}) {
  return <div className="instruction">
    {quizStringsPack[lang].instruction_mc_audio}
  </div>;
}

export function MultipleChoiceAudioUI({
  lang,
  challenge,
  currentAnswer,
  onAnswerChange,
  answerState,
}: MultipleChoiceAudioUIArguments) {
  
  return <div className="session quizStyles question_container">
    <MultipleChoiceAudioInstruction lang={lang}/>
    <AudioQuestionArea audio_url={challenge.audio_url} />
    <MultipleChoiceAnswerArea
      options={challenge.options}
      selected={currentAnswer}
      onChange={onAnswerChange}
      answerState={answerState}
    />
  </div>
}

const MultipleChoiceAudio = {
  UI: MultipleChoiceAudioUI,
  checkAnswer: checkMultipleChoiceAnswer,
}

export default MultipleChoiceAudio;
