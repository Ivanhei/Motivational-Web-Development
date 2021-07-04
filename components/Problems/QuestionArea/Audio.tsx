import { PlayIcon } from "@/assets/Icons";

import {
  useCallback,
  useEffect,
  useMemo,
} from "react";

export function AudioQuestionArea({
  audio_url,
}: {
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

  useEffect(() => {
    playWordAudio();
  }, [/*challenge, */playWordAudio]);

  return <div className="question_area audio">
    <div className="playbutton" onClick={(e) => playWordAudio()}>
      <PlayIcon/>
    </div>
  </div>
}

