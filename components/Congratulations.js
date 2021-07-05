import celebrationAudioFile from '@/assets/sounds/finish.wav'

import {
  useEffect,
} from "react";

export default function Congratulations(props) {

  // word audio
  const celebrationAudio = useMemo(() => {
    const audio = new Audio(celebrationAudioFile);
    audio.volume = 0.1;
    return audio;
  }, []);

  const playCelebrationAudio = useCallback(function () {
    celebrationAudio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      });
  }, [celebrationAudio]);

  useEffect(() => {
    playCelebrationAudio();
  }, [playCelebrationAudio]);

  return (
    <div className="text-center">
      <h2>Congratulations!</h2>
      <div>You have completed the quiz!</div>
    </div>
  );
};
