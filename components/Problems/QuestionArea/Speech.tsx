import { PlayIcon } from "@/assets/Icons";

import {
  useCallback,
  useEffect,
  useMemo,
} from "react";

export function SpeechQuestionArea({
  word,
  audio_url,
}: {
  word: string,
  audio_url: string,
}) {

  // word audio
  const wordAudio = useMemo(() => {
    return new Audio(audio_url);
  }, [audio_url]);

  const playWordAudio = useCallback(function () {
    wordAudio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      });
  }, [wordAudio]);

  return <div className={`question_area speech`}>
    <div className="primary">
      <div className="playbutton" onClick={(e) => playWordAudio()}><PlayIcon/></div>
      <span>{word}</span>
    </div>
  </div>
}
