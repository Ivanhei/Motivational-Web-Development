import celebrationAudioFile from '@/assets/sounds/finish.wav'

import {
  useEffect,
} from "react";

export default (function Congratulations(props) {
  const celebrationAudio = new Audio(celebrationAudioFile);
  celebrationAudio.volume = 0.1;

  useEffect(() => {
    celebrationAudio.play();
  }, []);

  return (
    <div className="text-center">
      <h2>Congratulations!</h2>
      <div>You have completed the quiz!</div>
    </div>
  );
});
