import Link from 'next/link';

import { usePath } from '@/common/utils';

import firebase from '@/common/firebase_init';
import 'firebase/auth';

import { useState, useEffect } from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function App(props) {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(user => {
      if (!user) setShowLoginDialog(true);
    });

    return () => {
      unsub();
    }
  });

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: usePath('/'),
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return <div id="login-container">
    {showLoginDialog ? <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> : null}
    <Link href="/">
      <a>Go Back</a>
    </Link>
  </div>;
}
