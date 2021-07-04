
import { AnswerState } from '@/common/UI/Types';

export function MultipleChoiceAnswerArea({
  options,
  selected,
  onChange,
  answerState
}: { 
  options: Array<string>,
  selected: string,
  onChange: (value: string) => void,
  answerState: AnswerState,
}) {
  return <div className="answer_area options">
    {options.map((option, i) => (
      <button
        disabled={answerState !== AnswerState.NOT_ANSWERED_YET}
        className={
          "option " +
          (selected === option
            ? answerState === AnswerState.ANSWER_CORRECT
              ? "correct"
              : answerState === AnswerState.ANSWER_INCORRECT
              ? "incorrect"
              : "selected"
            : "")
        }
        onClick={(e) => onChange(option)}
        style={{ margin: 10, width: "50%" }}
        key={i}
      >
        {option}
      </button>
    ))}
  </div>
}

export function checkMultipleChoiceAnswer(current: string, reference: string) {
  return current === reference;
}
