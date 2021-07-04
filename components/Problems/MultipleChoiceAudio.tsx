import { AnswerState } from "@/common/UI/Types";
import { MultipleChoiceAudioProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { quizStringsPack } from "@/common/Strings/quiz";
import { AudioQuestionArea } from "./QuestionArea/Audio";
import { MultipleChoiceAnswerArea } from "./AnswerArea/MultipleChoice";

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
}: {
  lang: LanguageTag,
  challenge: MultipleChoiceAudioProblem,
  currentAnswer: string,
  onAnswerChange: (value: string) => void,
  answerState: AnswerState,
}) {
  
  return <div className="session question_container">
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
  checkAnswer: function checkAnswer(current: string, reference: string) {
    return current === reference;
  },
}

export default MultipleChoiceAudio;
