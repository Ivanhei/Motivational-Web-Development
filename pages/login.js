import firebase from '../common/firebase_init';
import 'firebase/auth';

import { useState, useEffect } from 'react';

// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
// const authUI = new firebaseui.auth.AuthUI(firebase.auth());
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function App(props) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(user => {

      if (!user) {
        setShowLoginDialog(true);
      }

    });

    return () => {
      unsub();
    }
  });


  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '../',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // callbacks: {
    //   signInSuccessWithAuthResult: function (authResult, redirectUrl) {
    //     //const userId = authResult.user.uid;
    //     // Manually redirect.
    //     window.location.assign(`index.html`);
    //     // Do not automatically redirect.
    //     return false;
    //   }
    // }
  };

  return <div id="login-container">
    {showLoginDialog ? <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> : null}
    <a href="../">Go Back</a>
  </div>;
}
