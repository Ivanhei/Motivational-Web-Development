import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBORguQ4fUIgHevka4CiC-M44DM5DoBLQ",
  authDomain: "gt-uoa.firebaseapp.com",
  projectId: "gt-uoa",
  storageBucket: "gt-uoa.appspot.com",
  messagingSenderId: "990838040454",
  appId: "1:990838040454:web:25634085dc0b6184696e07"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;