
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

function mintuesSeconds(seconds: number) {
  return {
    minutes: Math.floor(seconds / 60),
    seconds: seconds % 60,
  }
}

export default function Congratulations({
  totalTime,
  bestTime,
  bestTimeUpdated
}: {
  totalTime?: number, // ms
  bestTime?: number,
  bestTimeUpdated?: boolean
}) {
  const finishMessage = useMemo(() => finishMessages[getRandomInt(finishMessages.length)], []);

  const celebrationAudioFile = usePath("/assets/sounds/finish.wav");
  const celebrationAudio = useSimpleSoundEffect(celebrationAudioFile, { volume: 0.1 });

  useEffect(() => {
    celebrationAudio.play();
  }, [celebrationAudio]);

  // time parse
  const hasTime = useMemo(() => !!totalTime, [totalTime])
  const hasBestTime = useMemo(() => !!bestTime, [bestTime])

  const total = useMemo(() => mintuesSeconds(totalTime), [totalTime])
  const best = useMemo(() => mintuesSeconds(bestTime), [bestTime])

  return (
    <div className="finishScreen session">
      <h2>{finishMessage}</h2>
      <div>Let’s keep going!</div>
      <div>{hasTime ? <>Time Elapsed: {total.minutes > 0 ? `${total.minutes}m` : ``} {total.seconds}s</> : <></>}</div>
      <div>{hasBestTime ? <>Your best time: {best.minutes > 0 ? `${best.minutes}m` : ``} {best.seconds}s</> : <></>}</div>
      <div>{bestTimeUpdated !== null && bestTimeUpdated ? <>Congradulations of updating your personal best time!</> : <></>}</div>
    </div>
  );
};
