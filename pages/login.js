import Link from 'next/link';

import { usePath } from '@/common/utils';
import { useAppContext } from '@/common/AppContext';

import firebase from '@/common/firebase_init';
import 'firebase/auth';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function App(props) {
  const appContext = useAppContext();
  const showLoginDialog = !appContext.user;

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
