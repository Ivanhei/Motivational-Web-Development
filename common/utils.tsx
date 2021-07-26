
// https://stackoverflow.com/a/19270021
export function getRandomFromArray(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// https://stackoverflow.com/a/2450976
export function shuffle(array: Array<any>) {
  let currentIndex = array.length, randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// https://stackoverflow.com/a/68201934/8958580
import { useRouter } from 'next/router';

export function usePath(path) {
  return `${useRouter().basePath}${path}`;
}

// TextBreakdown utilities
export interface TextBreakdown {
  before: string
  inside: string
  after: string
}

export function getTextBreakdown(text: string): TextBreakdown | null {
  const regex = /^([^\[]*)\[([^\[]*)\]([^\[]*)$/g;
  const matchingGroups = regex.exec(text);
  // matches strings like `ABC[DEF]GHI`, returns `["ABC[DEF]GHI", "ABC", "DEF", "GHI"]`

  if (!matchingGroups)
    return null;

  return {
    before: matchingGroups[1],
    inside: matchingGroups[2],
    after: matchingGroups[3],
  }
}

export function UnderlineTextBreakdown({before, inside, after}: TextBreakdown) {
  return <>{before} <u>{inside}</u> {after}</>;
}

export function ReplaceBraketWithUnderlinedText({sentence, inside}: {sentence: string, inside: string}) {
  const breakdown = getTextBreakdown(sentence);
  if (!breakdown) return <>{sentence}</>;

  return <>{breakdown.before} <u>{inside}</u> {breakdown.after}</>;
}

export function replaceBraketWithText(sentence: string, text: string, addSpace: boolean = false) {
  const breakdown = getTextBreakdown(sentence);
  if (!breakdown) return sentence;

  const optionalSpace = addSpace ? " " : "";
  return breakdown.before + optionalSpace + text + optionalSpace + breakdown.after;
}

//
import { useMemo, useCallback } from 'react';

export function useSimpleSoundEffect(url: string, { volume }: { volume?: number } = { volume: 1.0 }) {
  const audio = useMemo(() => {
    const audio = new Audio(url);
    audio.volume = volume;
    return audio;
  }, [url, volume]);

  const playAudio = useCallback(function () {
    audio.currentTime = 0;
    return audio.play()
      .catch((e) => {
        if (e.name === "NotAllowedError")
          console.log("This system does not allow audio to be auto-played.")
        else
          throw e;
      });
  }, [audio]);

  return {
    audio: audio,
    play: playAudio,
  }
}

// Inspired by but not copied from: https://medium.com/@bryanjenningz/faa1b2b3e49b
export function SimpleRecorder() {
	let mediaRecorder: MediaRecorder;

	// bytes saving
	const audioChunks = [];
	const saveData = (event: BlobEvent) => {
		audioChunks.push(event.data);
	}

  // custom listeners
  type VoidCallback = () => void;
  let onStartListener: VoidCallback = null;
  let onStopListener: VoidCallback = null;

  // booleans
  let starting = false;
  let stopping = false;
  // TODO: put these as `readonly` attributes in the returned object,
  //       instead of using a function to return the value.
  //       (Better readability)

	// return a promise since it takes time to set up.
	return {
		start: async () => {
      if (mediaRecorder)
        throw new Error("[SimpleRecorder] Cannot start while recording.")

      if (starting) return;
      starting = true;

			// start streams
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      try {
			  mediaRecorder = new MediaRecorder(stream);
      }
      catch (e) {
        stream.getTracks().forEach(track => track.stop());
        throw e;
      }

			// start recorder
			return new Promise<void>((resolve, reject) => {
				const onstart = () => {
          mediaRecorder.removeEventListener("start", onstart);

          starting = false;
          if (onStartListener) onStartListener();

					resolve();
				}
				mediaRecorder.addEventListener("dataavailable", saveData);
				mediaRecorder.addEventListener("start", onstart);
				mediaRecorder.start();
			});
		},
		stop: () => new Promise<Blob>((resolve, reject) => {
      if (!mediaRecorder)
        throw new Error("[SimpleRecorder] Cannot stop recording if not recording.")

      if (stopping) return;
      stopping = true;

			// stop recorder
			const onstop = () => {
				mediaRecorder.removeEventListener("stop", onstop);
				mediaRecorder.removeEventListener("dataavailable", saveData);

				// stop streams
				mediaRecorder.stream.getTracks().forEach(track => track.stop());
				mediaRecorder = null;

        stopping = false;
        if (onStopListener) onStopListener();

				const audioBlob = new Blob(audioChunks);
				audioChunks.length = 0;

				resolve(audioBlob);
			}
			mediaRecorder.addEventListener("stop", onstop);
			mediaRecorder.stop();
		}),

    // extra functionalities
    setOnStartRecordingListener(listener: () => void) {
      onStartListener = listener;
    },
    setOnStopRecordingListener(listener: () => void) {
      onStopListener = listener;
    },
    isRecording: () => !!mediaRecorder,
    isStopping: () => stopping,
    isStarting: () => starting,
	};
}

export function audioBlobToAudio(audioBlob: Blob): HTMLAudioElement {
  const audioUrl = URL.createObjectURL(audioBlob);
  return new Audio(audioUrl);
}

// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
export function debounce_UI(fn, ms) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, ms)
  };
}
/*
const debouncedHandleResize = debounce_UI(function() {
  //...
}, 1000);

element.addEventListener("click", debouncedHandleResize);
element.removeEventListener("click", debouncedHandleResize);

*/

// Math.random()
export function getRandomInt(belowInt: number): number {
  return Math.floor(Math.random() * belowInt);
}

// Remove Items in array from another array (For firestore document references)
import firebase from 'firebase/app'

export function removeUnwantedItems(
  original: Array<firebase.firestore.DocumentReference>, 
  unwanted: Array<firebase.firestore.DocumentReference>
): Array<firebase.firestore.DocumentReference> {
  return original.filter(item => !unwanted.some(unwanted_item => item.isEqual(unwanted_item)))
}
