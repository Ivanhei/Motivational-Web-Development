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

// helper mappings
const docSnapshotToDoc = (doc) => ({
  ...doc.data(),
  id: doc.id,
  _ref: doc.ref
});

const docWithAudioURL_promise = (doc) => 
  storage.ref().child(doc.audio).getDownloadURL()
    .then((url) => ({
      ...doc,
      audio_url: url
    }))
    .catch((err) => {
      console.error("Error while getting Audio URL. ", err.code);

      // still return the doc without the audio url
      return doc;
    });

// operators for transforming incoming questions
const convertDocSnapshotToDoc = map(docSnapshotToDoc);

const convertDocRefArrayToDocSnapshotArray = mergeMap(
  (docRefs) => Promise.all(docRefs.map(problemRef => problemRef.get()))
);

const convertDocSnapshotArrayToDocs = map(
  (docArray) => docArray.map(docSnapshotToDoc)
);

const convertQuerySnapshotToDocs = map(
  (querySnapshot) => querySnapshot.docs.map(docSnapshotToDoc)
);

const randomSelectNFromArray = (n) =>
  map((array) => array.length > n ? getRandomFromArray(array, n) : array)

const fetchAudioURLForDocs = mergeMap((docs) =>
  Promise.all(docs.map(docWithAudioURL_promise)));

const fetchAudioURLForDoc = mergeMap(docWithAudioURL_promise);

export {
  convertDocSnapshotToDoc,
  convertDocRefArrayToDocSnapshotArray,
  convertDocSnapshotArrayToDocs,
  convertQuerySnapshotToDocs,
  randomSelectNFromArray,
  fetchAudioURLForDocs,
  fetchAudioURLForDoc,
}
