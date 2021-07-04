
import { AnswerState } from '@/common/UI/Types';

import { MicIcon } from '@/assets/Icons';

export function SpeechAnswerArea({
  onChange,
  answerState
}: {
  onChange: (value: string) => void,
  answerState: AnswerState,
}) {
  return <div className="answer_area speech">
      <button><MicIcon width="16" height="24"/> 押してして話す</button>
      {/* <button><MicIcon width="16" height="24"/> Playback</button> */}
  </div>
}

export function checkSpeechAnswer(current: string, reference: string) {
  return current.toLowerCase() === reference.toLowerCase();
}
