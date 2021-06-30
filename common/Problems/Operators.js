// utils
import { getRandomFromArray } from '@/common/utils';

// database
import firebase from '@/common/firebase_init';
import "firebase/storage";
const storage = firebase.storage();

// UI
import {
  map,
  mergeMap,
} from "rxjs/operators";


// operators for transforming incoming questions
const convertQuerySnapshotToDocs = map((querySnapshot) =>
  querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))
);

const randomSelectNFromArray = (n) =>
  map((array) => array.length > n ? getRandomFromArray(array, n) : array)

const fetchAudioURLForDocs = mergeMap(async (docs) =>
  Promise.all(
    docs.map((doc) =>
      storage
      .ref()
      .child(doc.audio)
      .getDownloadURL()
      .then((url) => ({
        ...doc,
        audio_url: url
      }))
      .catch((err) => {
        console.error("Error while getting Audio URL. ", err.code);

        // still return the doc without the audio url
        return doc;
      })
    )
  ));

export {
  convertQuerySnapshotToDocs,
  randomSelectNFromArray,
  fetchAudioURLForDocs,
}
