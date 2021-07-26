import Link from 'next/link';
import Head from 'next/head';

import Login from '@/components/Login';
import { useEffect, useState } from 'react';
import { observeUser } from '@/common/User/subjects';

export default function App(props) {
  const [showLoginDialog, setShowLoginDialog] = useState(undefined);

  useEffect(() => {
    const userObservable = observeUser();
    const subs = userObservable.subscribe((user) => {
      setShowLoginDialog(!user);
    });

    return () => {
      subs.unsubscribe();
    };
  }, []);

  return <div id="login-container">
    <Head>
      <title>Login</title>
    </Head>
    {showLoginDialog ? <Login signInSuccessUrl="/"/> : null}
    <Link href="/">
      <a>Go Back</a>
    </Link>
  </div>;
}
