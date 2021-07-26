import firebase from '@/common/firebase_init';

import { useEffect, useMemo, useState } from 'react';
import { Observable, ReplaySubject } from 'rxjs';
import { map, mergeMap, share } from 'rxjs/operators';
import { convertDocSnapshotToDoc } from '../Problems/Operators';
import { observeUser, observeUserDoc } from './subjects';
import { UserDoc } from './Types';

export function useUserSubject() {
  const subjectUser = useMemo(() => new ReplaySubject<firebase.User | null>(1), []);
  const userObservable = useMemo(() => observeUser().pipe(share()), []);

  useEffect(() => {
    const subscriptions = userObservable.subscribe(subjectUser);

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectUser, userObservable]);

  return subjectUser;
}

export function useUserDocSubject(subjectUser: Observable<firebase.User | null>) {
  const subjectUserDoc = useMemo(() => new ReplaySubject<UserDoc>(1), []);

  useEffect(() => {
    const subscriptions = subjectUser
      .pipe(mergeMap(user => user?.uid ?
        firebase.firestore()
          .collection('users').doc(user.uid)
          .get() : []
          // returns no user if not logged in
      ))
      .pipe(convertDocSnapshotToDoc)
      .pipe(map(doc => {
        if (!doc.problems)
        return ({...doc, problems: []} as UserDoc)

        return doc as UserDoc
      }))
      .subscribe(subjectUserDoc);

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectUser, subjectUserDoc]);

  return subjectUserDoc;
}

/*
export function useUserSubject() {
  return useMemo(() => observeUser(), []);
}

export function useUserDocSubject(subjectUser: Observable<firebase.User | null>) {
  return useMemo(() => observeUserDoc(subjectUser), [subjectUser]);
}
*/

export interface UserWithDoc {
  user: firebase.User | null
  userDoc: UserDoc
}

export function useLoadedUser() {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState<firebase.User | null>(null);
  const userObservable = useMemo(() => observeUser(), []);

  useEffect(() => {
    const subs = userObservable.subscribe((user) => {
      setLoaded(true);
      setUser(user);
    });

    return () => {
      subs.unsubscribe();
    };
  }, [userObservable]);

  return { userLoaded: loaded, user };
}
