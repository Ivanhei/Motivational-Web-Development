// Types
import { SpellingAudioProblem } from "@/common/Problems/Types";
import { LanguageTag } from "@/common/Strings/Types";
import { ProblemUIArguments } from "./types";

export interface SpellingAudioUIArguments extends ProblemUIArguments {
  challenge: SpellingAudioProblem,
}

// Strings
import { quizStringsPack } from "@/common/Strings/quiz";

// SubComponents
import { AudioQuestionArea } from "./QuestionArea/Audio";
import { checkSpellingAnswer, SpellingAnswerArea } from "./AnswerArea/Spelling";

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
}: SpellingAudioUIArguments) {
  
  return <div className="session quizStyles question_container">
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
  checkAnswer: checkSpellingAnswer,
}

export default SpellingAudio;
