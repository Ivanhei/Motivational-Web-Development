import firebase from '@/common/firebase_init';
import 'firebase/firestore';

const db = firebase.firestore();

import { useEffect, useMemo } from "react";
import { from, Subject, Subscription } from "rxjs";

import * as problemOperators from '@/common/Problems/Operators'
import * as tropyOperators from '@/common/Tropies/Operators'

import { Tropy } from "./Types";
import { map, tap } from "rxjs/operators";

export function useTrophiesSubject(): Subject<Array<Tropy>> {
  const subjectTrophies = useMemo(() => new Subject<Array<Tropy>>(), []);

  useEffect(() => {
    const subscriptions = new Subscription();
    
    const colorMap = {
      'ruby': 1,
      'diamond': 2,
      'gold': 3,
      'silver': 4,
      'bronze': 5,
    }

    // make it hot after all circuitry completed.
    subscriptions.add(from(db.collection('trophies').get())
      .pipe(problemOperators.convertQuerySnapshotToDocs)
      .pipe(tropyOperators.convertTropyDocsToTropies)
      .pipe(map(array => array.sort((a, b) => {
        console.log(a.color, b.color)
        console.log(colorMap[a.color], colorMap[b.color])
        return colorMap[a.color] - colorMap[b.color];
      })))
      .pipe(tap(a => console.log(a.map(i => i.color))))
      .subscribe(subjectTrophies));

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectTrophies]);

  return subjectTrophies;
}
