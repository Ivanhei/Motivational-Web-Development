
import { AnswerState } from '@/common/UI/Types';
import AutoSizeButton from './AutoSizeButton';

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
      <AutoSizeButton
        disabled={answerState !== AnswerState.NOT_ANSWERED_YET
          /** Firefox bug hack. */ && selected !== option}
          // Firefox does not dispatch document's `keyup` event if the focus is disabled
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
        key={i}
      >
        {option}
      </AutoSizeButton>
    ))}
  </div>
}

export function checkMultipleChoiceAnswer(current: string, reference: string) {
  return current === reference;
}
