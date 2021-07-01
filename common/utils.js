
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
