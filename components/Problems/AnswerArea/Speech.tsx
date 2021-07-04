
import { AnswerState } from '@/common/UI/Types';

import { MicIcon } from '@/assets/Icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { combineLatest, from, Subject } from 'rxjs';
import { delay, filter, mergeMap, tap } from 'rxjs/operators';

function getAudioRecorder() {
  //let [mediaRecorder, setMediaRecorder] = useState(null as MediaRecorder);
  let mediaRecorder: MediaRecorder = null;

  const audioChunks = [];

  const uponStart = () => {
    audioChunks.length = 0;
  }

  const uponData = event => {
    audioChunks.push(event.data);
  }

  const uponStop = () => {
    const audioBlob = new Blob(audioChunks);
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();

    mediaRecorder.removeEventListener("dataavailable", uponData);
    mediaRecorder.removeEventListener("stop", uponStop);
  }

  return {
    async initialize() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener("start", uponStart);
      mediaRecorder.addEventListener("dataavailable", uponData);
      mediaRecorder.addEventListener("stop", uponStop);
    },
    start() {
      if (mediaRecorder)
        mediaRecorder.start()
    },
    stop() {
      if (mediaRecorder)
        mediaRecorder.stop()
    },
  }
}

// https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b
const recordAudio = (): Promise<{
  start: () => void,
  stop: () => Promise<{
    audioBlob: Blob,
    audioUrl: string,
    play: () => Promise<void>,
  }>,
}> =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = (): Promise<{
      audioBlob: Blob,
      audioUrl: string,
      play: () => Promise<void>,
    }> =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

export function SpeechAnswerArea({
  onChange,
  answerState
}: {
  onChange: (value: string) => void,
  answerState: AnswerState,
}) {
  const [loaded, setLoaded] = useState(false);
  const [recording, setRecording] = useState(false);

  //const audioRecorderPromise = useMemo(() => recordAudio(), []);

  const subjectButtonSignal = useMemo(() => new Subject<void>(), []);
  useEffect(() => {
    const subjectAudioRecorderReady = new Subject<{
      start: () => void,
      stop: () => Promise<{
        audioBlob: Blob,
        audioUrl: string,
        play: () => Promise<void>,
      }>,
    }>();
  
    const subs = combineLatest([subjectAudioRecorderReady, subjectButtonSignal])
      .pipe(tap(([audioRecorder]) => audioRecorder.start()))
      .pipe(tap(() => setRecording(true)))
      .pipe(delay(5000))
      .pipe(mergeMap(([audioRecorder]) => audioRecorder.stop()))
      .pipe(tap(({ audioBlob, audioUrl, play }) => play()))
      .subscribe();

    // make circuit hot
    subs.add(from(recordAudio()).subscribe(subjectAudioRecorderReady))

    return () => {
      subs.unsubscribe();
    }
  }, [subjectButtonSignal, setRecording])

  return <div className="answer_area speech">
      <button disabled={!loaded || recording} className={`${recording?"recording":""}`} onClick={(e) => subjectButtonSignal.next()}>
        <MicIcon width="16" height="24"/> 押してして話す
      </button>
      <button>Playback</button>
  </div>
}

export function checkSpeechAnswer(current: string, reference: string) {
  return current.toLowerCase() === reference.toLowerCase();
}
