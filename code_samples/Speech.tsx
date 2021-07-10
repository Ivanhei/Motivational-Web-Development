
import { AnswerState } from '@/common/UI/Types';

import { MicIcon } from '@/assets/Icons';
import { useCallback, useMemo, useState } from 'react';

import { audioBlobToAudio, SimpleRecorder } from '@/common/utils';
import { LanguageTag } from '@/common/Strings/Types';
import { quizStringsPack } from '@/common/Strings/quiz';

export function SpeechAnswerArea({
  lang,
  onChange,
  answerState
}: {
  lang: LanguageTag,
  onChange: (value: string) => void,
  answerState: AnswerState,
}) {
  const [recording, setRecording] = useState(false);

  const audioRecorder = useMemo(() => {
    const recorder = SimpleRecorder();

    recorder.setOnStartRecordingListener(() => {
      setRecording(true);
    });
    recorder.setOnStopRecordingListener(() => {
      setRecording(false);
    });

    return recorder;
  }, []);

  const handleRecordClick = useCallback((e) => {
    if (audioRecorder.isRecording())
      audioRecorder.stop()
        .then(audioBlob => {
          audioBlobToAudio(audioBlob).play();
        });
    else
      audioRecorder.start();
  }, [audioRecorder]);

  return <div className="answer_area speech">
      <button className={`${recording?"recording":""}`} onClick={handleRecordClick}>
        <MicIcon width="16" height="24"/><span>{quizStringsPack[lang].recording_button}</span>
      </button>
  </div>
}

export function checkSpeechAnswer(current: string, reference: string) {
  return current.toLowerCase() === reference.toLowerCase();
}
