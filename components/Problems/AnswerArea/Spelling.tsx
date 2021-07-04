
import { AnswerState } from '@/common/UI/Types';

export function SpellingAnswerArea({
  value,
  onChange,
  answerState
}: {
  value: string,
  onChange: (value: string) => void,
  answerState: AnswerState,
}) {
  return <div className="answer_area input_container">
    <input
      autoComplete="off" autoCorrect="off"
      autoCapitalize="off" spellCheck="false" 
      onChange={(e) => onChange(e.target.value)}
      className={
        "input " +
        (value.length > 0
          ? answerState === AnswerState.ANSWER_CORRECT
            ? "correct"
            : answerState === AnswerState.ANSWER_INCORRECT
            ? "incorrect"
            : "answered"
          : "")
      }
      value={value}
    />
  </div>
}
