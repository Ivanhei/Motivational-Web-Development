import { PlayIcon } from "@/assets/Icons";
import { BooleanValueChangeEventHandler } from "@/common/UI/Types";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export function SpeechQuestionArea({
  word,
  audio_url,
  listeningToSpeech,
  onPlayingStateChange,
}: {
  word: string,
  audio_url: string,
  listeningToSpeech: boolean,
  onPlayingStateChange: BooleanValueChangeEventHandler,
}) {
  const [playing, setPlaying] = useState(false);

  // word audio
  const wordAudio = useMemo(() => {
    const audio = new Audio(audio_url);
    audio.addEventListener("ended", (e) => {
      setPlaying(false);
    })
    // TODO: removeEventListener
    return audio;
  }, [audio_url]);

  const playWordAudio = useCallback(function () {
    wordAudio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      })
      .then(() => {
        setPlaying(true);
      });
  }, [wordAudio]);

  // onListeningStateChange
  useEffect(() => {
    onPlayingStateChange(playing);
  }, [playing, onPlayingStateChange])

  // stop playing if start recording
  useEffect(() => {
    if (listeningToSpeech) {
      wordAudio.pause();
      wordAudio.currentTime = 0;
    }
  }, [listeningToSpeech, wordAudio])

  return <div className={`question_area speech`}>
    <div className="primary">
      <div className="playbutton" onClick={(e) => playWordAudio()}><PlayIcon/></div>
      <span>{word}</span>
    </div>
  </div>
}
