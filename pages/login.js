import Link from 'next/link';

import Login from '@/components/Login';
import { useEffect, useState } from 'react';
import { observeUser } from '@/common/utils';

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
    {showLoginDialog ? <Login signInSuccessUrl="/"/> : null}
    <Link href="/">
      <a>Go Back</a>
    </Link>
  </div>;
}
