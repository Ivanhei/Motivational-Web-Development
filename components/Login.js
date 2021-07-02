import { usePath } from '@/common/utils';

import firebase from '@/common/firebase_init';
import 'firebase/auth';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Login({ signInSuccessUrl }) {
  const jumpPageUrl = usePath(signInSuccessUrl || "");
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: signInSuccessUrl ? jumpPageUrl : undefined,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
}
