
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

// Currently logged in User: react hook
import firebase from '@/common/firebase_init';
import 'firebase/auth';

import { useState, useEffect } from 'react';

export function useUser() {
  const [userCredentials, setUserCredentials] = useState(null);

  useEffect(() => {
    const unsub_auth = firebase.auth().onAuthStateChanged(user => {
      setUserCredentials(user);
    });

    return () => {
      unsub_auth();
    };
  }, []);

  return userCredentials;
}

// rx user logged in
export function observeUser() {
  // https://rxjs.dev/api/index/class/Observable#constructor
  return new Observable(function(observer) {
    const unsub_auth = firebase.auth().onAuthStateChanged(
      user => observer.next(user),
      error => observer.error(error),
      () => observer.complete(), // Why is this? Does this function even get called?
    );

    return () => {
      unsub_auth();
      observer.complete();
    }
  });
}

//
import 'firebase/firestore';
import { Observable } from 'rxjs';

export function getUserDocRef(userCredentials) {
  if (userCredentials)
    return firebase.firestore().collection('users').doc(userCredentials.uid);

  return userCredentials;
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
