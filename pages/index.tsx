import Link from 'next/link'
import Head from 'next/head'

import firebase from '@/common/firebase_init';
import 'firebase/storage'

import {
  ComputerIcon,
  AirplaneIcon,
  ChatIcon,
} from '@/assets/Icons';

import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';

import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import * as problemOperators from '@/common/Problems/Operators'
import * as tropyOperators from '@/common/Tropies/Operators'

import { useLoadedUser, useUserDocSubject, useUserSubject } from '@/common/User/hooks'

import { Tropy, TropyInterface } from '@/common/Tropies/Types';

import { LanguageTag } from '@/common/Strings/Types';
import { HomeStrings, homeStringsPack } from '@/common/Strings/home';

import NotificationBanner from '@/components/NotificationBanner';
import NavgigationBar from '@/components/NavigationBar';
import { timeToString } from '@/common/utils';

function TopicIconBackground(props) {
  const color = props.color || "#333333";
  return (
    <svg height="100%" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM66.1112 35C66.1112 52.1822 52.1822 66.1111 35 66.1111C17.8179 66.1111 3.88893 52.1822 3.88893 35C3.88893 17.8178 17.8179 3.88892 35 3.88892C52.1822 3.88892 66.1112 17.8178 66.1112 35Z"/>
      <path fill={color} d="M35 61.4446C49.6049 61.4446 61.4444 49.605 61.4444 35.0001C61.4444 20.3952 49.6049 8.55566 35 8.55566C20.3951 8.55566 8.55554 20.3952 8.55554 35.0001C8.55554 49.605 20.3951 61.4446 35 61.4446Z"/>
    </svg>
  );
}

function Topic({link, color, overlay, name, bestTime}: {link, color, overlay, name, bestTime?}) {
  const bestTimeStr = useMemo(() => bestTime ? timeToString(bestTime) : null, [bestTime])

  return (
    <div className="wrap">
      <div></div>
      <div className="item">
        <Link href={link ? link : ""}>
        <a>
          <div className="icon">
            <div className="icon-bg">
              <TopicIconBackground color={color} />
            </div>
            <div className="icon-main">{overlay}</div>
          </div>

          <div className="name">{name}</div>
        </a>
        </Link>

        {bestTime ? <div>{bestTimeStr}</div> : <></>}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}


export default function App(props) {
  const {userLoaded, user} = useLoadedUser();

  // notifications
  const subjectUser = useUserSubject()
  const subjectUserDoc = useUserDocSubject(subjectUser)
  //const subjectTropyNotifications = useMemo(() => new Subject<any>(), [])
  const pendingTropies = useRef<Tropy[]>([])
  const currentTropyRef = useRef<firebase.firestore.DocumentReference>(null)
  const [pendingTropiesReady, setPendingTropiesReady] = useState(false)
  const [notificationTropy, setNotificationTropy] = useState<TropyInterface>({
    color: "string",
    condition: {},
    name: "string",
  })
  const [visualShowTropyNotify, setVisualShowTropyNotify] = useState(false)
  const subjectShouldUpdate = useMemo(() => new Subject<void>(), [])

  useEffect(() => {
    const subscriptions = new Subscription();

    subscriptions.add(
      subjectShouldUpdate
        .subscribe(function updateRecord() {
          if (!currentTropyRef.current || !user?.uid) return;

          firebase.firestore()
            .collection('users').doc(user.uid)
            .update({
              queuedTropyNotifications: firebase.firestore.FieldValue.arrayRemove(currentTropyRef.current)
            })
        })
    )
    return () => {
      subscriptions.unsubscribe()
    }
  }, [subjectShouldUpdate, user?.uid])

  
  useEffect(() => {
    const subscriptions = new Subscription();

    subscriptions.add(
      subjectUserDoc
        .pipe(map(userDoc => userDoc.queuedTropyNotifications))
        .pipe(problemOperators.convertDocRefArrayToDocSnapshotArray)
        .pipe(problemOperators.convertDocSnapshotArrayToDocs)
        .pipe(tropyOperators.convertTropyDocsToTropies)
        .subscribe(tropies => {
          pendingTropies.current.push(...tropies)
          setPendingTropiesReady(true)
        })
    )

    return () => {
      subscriptions.unsubscribe()
    }
  }, [subjectUser, subjectUserDoc])

  useEffect(() => {
    if (!pendingTropiesReady) return;

    let intervalHandle = null;
    let secondaryHandle = null;
    const interval = 5000;
    const seenInterval = 1000; // time after shown to judge notification as "seen"
    const animationInterval = 200; // animation length (change with css)

    setup();
    function setup() {
      const currentItem = pendingTropies.current.shift();
      if (!currentItem)
        return;

      currentTropyRef.current = currentItem._ref
      setNotificationTropy(currentItem)
      setVisualShowTropyNotify(true)

      secondaryHandle = setTimeout(() => {subjectShouldUpdate.next()}, seenInterval);
      intervalHandle = setTimeout(teardown, interval + animationInterval);
    }
    function teardown() {
      setVisualShowTropyNotify(false)

      intervalHandle = setTimeout(setup, animationInterval);
    }

    return () => {
      clearTimeout(intervalHandle)
      clearTimeout(secondaryHandle)
    }
  }, [pendingTropiesReady, subjectShouldUpdate])
  

  // UI lang
  const languageTag: LanguageTag = props.language
  const strings: HomeStrings = useMemo(() => homeStringsPack[languageTag], [languageTag])

  // useEffect(() => {
  //   introJs().setOptions({
  //     steps:[{
  //       title:'ようこそ',
  //       intro:'このチュートリアルでは、ゲームの進行をガイドします。'
  //     },
  //     {
  //       title:''
  //     }]
  //   }).start()
  // }, [])
  return (
    <>
    <div className="home-container">
      <Head>
        <title>Motivational Web Development</title>
      </Head>
      <NavgigationBar language={languageTag}/>

      <div className="topics session">
        <Topic
          name="Computer Science"
          color="#EE2E22"
          overlay={<ComputerIcon/>}
          link="quiz/CSE"
          //bestTime={}
        />
        <Topic
          name="Academics"
          color="#476cff"
          overlay={<AirplaneIcon/>}
          link="quiz/Academics"
          //bestTime={}
        />
        <Topic
          name="Texting"
          color="#0bac61"
          overlay={<ChatIcon/>}
          link="quiz/Texting"
          //bestTime={}
        />
      </div>
    </div>
    <div className="overlay-container">
      <div className="overlay-layout right transparent">
        <NotificationBanner shown={visualShowTropyNotify} message="トロフィーをゲットしました！" tropy={notificationTropy}/>
      </div>
    </div>
    </>
  );
}
