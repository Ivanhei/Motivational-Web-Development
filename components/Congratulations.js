
import {
  useEffect,
} from "react";

import { usePath, useSimpleSoundEffect } from '@/common/utils';

export default function Congratulations(props) {

  const celebrationAudioFile = usePath("/assets/sounds/finish.wav");
  const celebrationAudio = useSimpleSoundEffect(celebrationAudioFile, { volume: 0.1 });

  useEffect(() => {
    celebrationAudio.play();
  }, [celebrationAudio]);

  return (
    <div className="text-center">
      <h2>Congratulations!</h2>
      <div>You have completed the quiz!</div>
    </div>
  );
};
