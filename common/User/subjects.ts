
// rx user logged in
import firebase from 'firebase/app'

import { Observable } from 'rxjs'
import { map, mergeMap, share } from 'rxjs/operators'

import { convertDocSnapshotToDoc, docSnapshotToDoc } from '@/common/Problems/Operators'

import { UserDoc } from './Types';

export function observeUser() {
  // https://rxjs.dev/api/index/class/Observable#constructor
  // TODO: make this a `ReplaySubject` with buffer size 1
  return new Observable<firebase.User | null>(function(observer) {
    const unsub_auth = firebase.auth().onAuthStateChanged(
      user => observer.next(user),
      error => observer.error(error),
      () => observer.complete(), // Why is this? Does this function even get called?
    );

    return () => {
      unsub_auth();
      observer.complete();
    }
  }).pipe(share());
}

export function observeUserDoc(subjectUser: Observable<firebase.User | null>) {
  return subjectUser
    .pipe(mergeMap(user => user?.uid ?
      firebase.firestore()
        .collection('users').doc(user.uid)
        .get() : []
        // returns no doc if not logged in
    ))
    .pipe(convertDocSnapshotToDoc)
    .pipe(map(doc => doc as UserDoc));
}

// export function observeUserWithDoc() {
//   return observeUser()
//     .pipe(mergeMap(async user => ({
//       user,
//       userDoc: user?.uid ?
//         docSnapshotToDoc(await firebase.firestore()
//           .collection('users').doc(user.uid)
//           .get()
//         ) as UserDoc :
//         null
//         // doc is null if not logged in
//     })))
// }
