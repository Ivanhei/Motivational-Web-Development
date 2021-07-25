
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

export default function Congratulations({
  totalTime,
}: {
  totalTime?: number, // ms
}) {
  const finishMessage = useMemo(() => finishMessages[getRandomInt(finishMessages.length)], []);

  const celebrationAudioFile = usePath("/assets/sounds/finish.wav");
  const celebrationAudio = useSimpleSoundEffect(celebrationAudioFile, { volume: 0.1 });

  useEffect(() => {
    celebrationAudio.play();
  }, [celebrationAudio]);

  // time parse
  const hasTime = useMemo(() => !!totalTime, [totalTime])
  const mintues = useMemo(() => !totalTime ? null : Math.floor(totalTime / 60), [totalTime])
  const seconds = useMemo(() => !totalTime ? null : totalTime % 60, [totalTime])

  return (
    <div className="finishScreen session">
      <h2>{finishMessage}</h2>
      <div>Let’s keep going!</div>
      <div>{hasTime ? <>Your best time: {mintues > 0 ? `${mintues}m` : ``} {seconds}s</> : <></>}</div>
    </div>
  );
};
