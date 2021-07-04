import { AnswerState } from "@/common/UI/Types";
import { SpellingAudioProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { quizStringsPack } from "@/common/Strings/quiz";
import { AudioQuestionArea } from "./QuestionArea/Audio";
import { SpellingAnswerArea } from "./AnswerArea/Spelling";

export function SpellingAudioInstruction({
  lang,
}: {
  lang: LanguageTag,
}) {
  return <div className="instruction">
    {quizStringsPack[lang].instruction_spelling_audio}
  </div>;
}

export function SpellingAudioUI({
  lang,
  challenge,
  currentAnswer,
  onAnswerChange,
  answerState,
}: {
  lang: LanguageTag,
  challenge: SpellingAudioProblem,
  currentAnswer: string,
  onAnswerChange: (value: string) => void,
  answerState: AnswerState,
}) {
  
  return <div className="session question_container">
    <SpellingAudioInstruction lang={lang}/>
    <AudioQuestionArea audio_url={challenge.audio_url} />
    <SpellingAnswerArea
      value={currentAnswer}
      onChange={onAnswerChange}
      answerState={answerState}
    />
  </div>
}

const SpellingAudio = {
  UI: SpellingAudioUI,
  checkAnswer: function checkAnswer(current: string, reference: string) {
    return current.toLowerCase() === reference.toLowerCase();
  },
}

export default SpellingAudio;
