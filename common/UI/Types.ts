
enum AnswerState {
    NOT_ANSWERED_YET = -1,
    ANSWER_INCORRECT = 0,
    ANSWER_CORRECT = 1,
}

type ValueChangeEventHandler = (value: string) => void;
type NextEventHandler = () => void;

export { AnswerState };
export type { ValueChangeEventHandler, NextEventHandler };
