import firebase from '@/common/firebase_init';
import 'firebase/firestore';

const db = firebase.firestore();

import { useEffect, useMemo } from "react";
import { combineLatest, from, Observable, Subject, Subscription } from "rxjs";

import * as problemOperators from '@/common/Problems/Operators'
import * as tropyOperators from '@/common/Tropies/Operators'

import { Tropy } from "./Types";
import { map } from "rxjs/operators";
import { UserDoc } from '@/common/User/Types';

const colorMap = {
  'ruby': 1,
  'diamond': 2,
  'gold': 3,
  'silver': 4,
  'bronze': 5,
}

export function useTrophiesSubject(): Subject<Array<Tropy>> {
  const subjectTrophies = useMemo(() => new Subject<Array<Tropy>>(), []);

  useEffect(() => {
    const subscriptions = new Subscription();
    
    // make it hot after all circuitry completed.
    subscriptions.add(from(db.collection('trophies').get())
      .pipe(problemOperators.convertQuerySnapshotToDocs)
      .pipe(tropyOperators.convertTropyDocsToTropies)
      .pipe(map(array => array.sort((a, b) => {
        return colorMap[a.color] - colorMap[b.color];
      })))
      .subscribe(subjectTrophies));

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectTrophies]);

  return subjectTrophies;
}

export function useRemainingTrophiesSubject(subjectUserDoc: Observable<UserDoc>): Subject<Array<Tropy>> {
  const subjectTrophies = useTrophiesSubject();
  const subjectRemainingTrophies = useMemo(() => new Subject<Array<Tropy>>(), []);

  useEffect(() => {
    const subscriptions = new Subscription();

    // make it hot after all circuitry completed.
    subscriptions.add(
      combineLatest([
        subjectTrophies,
        subjectUserDoc.pipe(map(userDoc => userDoc.finishedTropies || []))
      ])
        .pipe(map(([trophies, doneTrophies]) => {
          if (!doneTrophies || doneTrophies.length === 0)
            return trophies
          else
            return trophies.filter(
              trophy => doneTrophies.every(doneTrophy => !trophy._ref.isEqual(doneTrophy))
              // predicate: for every finished tropy, it is not equal to the tropy in the list
              // (filtering out the tropies that are finished)
            )
        }))
        .subscribe(subjectRemainingTrophies)
    );

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectTrophies, subjectRemainingTrophies, subjectUserDoc]);

  return subjectRemainingTrophies;
}

export function useTrophiesWithStatusSubject(subjectUserDoc: Observable<UserDoc>): Subject<Array<Tropy>> {
  const subjectTrophies = useTrophiesSubject();
  const subjectTrophiesWithStatus = useMemo(() => new Subject<Array<Tropy>>(), []);

  useEffect(() => {
    const subscriptions = new Subscription();

    // make it hot after all circuitry completed.
    subscriptions.add(
      combineLatest([
        subjectTrophies,
        subjectUserDoc.pipe(map(userDoc => userDoc.finishedTropies || []))
      ])
        .pipe(map(([trophies, doneTrophies]) => {
          if (!doneTrophies || doneTrophies.length === 0)
            return trophies.map(trophy => ({...trophy, achived: false} as Tropy))
          else
            return trophies.map(
              trophy => ({...trophy, achived: doneTrophies.some(doneTrophy => trophy._ref.isEqual(doneTrophy))})
            )
        }))
        .subscribe(subjectTrophiesWithStatus)
    );

    return () => {
      subscriptions.unsubscribe();
    };
  }, [subjectTrophies, subjectTrophiesWithStatus, subjectUserDoc]);

  return subjectTrophiesWithStatus;
}
