
import {
  useEffect,
  useMemo,
} from "react";

import {
  getRandomInt,
  usePath,
  useSimpleSoundEffect
} from '@/common/utils';

const finishMessages = ["Congratulations!", "Well done!"];

export default function Congratulations(props) {
  const finishMessage = useMemo(() => finishMessages[getRandomInt(finishMessages.length)], []);

  const celebrationAudioFile = usePath("/assets/sounds/finish.wav");
  const celebrationAudio = useSimpleSoundEffect(celebrationAudioFile, { volume: 0.1 });

  useEffect(() => {
    celebrationAudio.play();
  }, [celebrationAudio]);

  return (
    <div className="finishScreen session">
      <h2>{finishMessage}</h2>
      <div>Let’s keep going!</div>
      <div>Your best time: 01m 35s</div>
    </div>
  );
};
