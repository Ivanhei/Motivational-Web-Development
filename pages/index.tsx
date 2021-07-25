import Link from 'next/link'
import Head from 'next/head'

import firebase from '@/common/firebase_init';
import 'firebase/storage'
import 'firebase/auth'

const storageRef = firebase.storage().ref();

import {
  HomeIcon,
  ChallengeIcon,
  ComputerIcon,
  AirplaneIcon,
  ChatIcon,
  LoadingIcon,
  CrossIcon,
} from '@/assets/Icons';

import {
  useLoadedUser,
  useUserSubject,
} from '@/common/utils';

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

import ChangeAvatarDialog from '@/components/ChangeAvatarDialog'
import { Tropy, TropyInterface } from '@/common/Tropies/Types';
import NotificationBanner from '@/components/NotificationBanner';

function TopicIconBackground(props) {
  const color = props.color || "#333333";
  return (
    <svg height="100%" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM66.1112 35C66.1112 52.1822 52.1822 66.1111 35 66.1111C17.8179 66.1111 3.88893 52.1822 3.88893 35C3.88893 17.8178 17.8179 3.88892 35 3.88892C52.1822 3.88892 66.1112 17.8178 66.1112 35Z"/>
      <path fill={color} d="M35 61.4446C49.6049 61.4446 61.4444 49.605 61.4444 35.0001C61.4444 20.3952 49.6049 8.55566 35 8.55566C20.3951 8.55566 8.55554 20.3952 8.55554 35.0001C8.55554 49.605 20.3951 61.4446 35 61.4446Z"/>
    </svg>
  );
}

function IconLink({ link, icon, title } : { link?, icon?, title }) {
  return (
  <div className="item">
    <Link href={link ? link : ""}>
    <a>
      {icon || null}
      <span>{title}</span>
    </a>
    </Link>
  </div>
  );
}

function Topic({link, color, overlay, name}) {
  return (
    <div className="wrap">
      <div></div>
      <Link href={link ? link : ""}>
        <a className="item">
          <div className="icon">
            <div className="icon-bg">
              <TopicIconBackground color={color} />
            </div>
            <div className="icon-main">{overlay}</div>
          </div>

          <div className="name">{name}</div>
        </a>
      </Link>
      <div></div>
      <div></div>
    </div>
  );
}


export default function App(props) {
  const {userLoaded, user} = useLoadedUser();
  const [avatarUpdateSignal, setAvatarUpdateSignal] = useState(false);
  const triggerAvatarUpdateSignal = useCallback(() => {
    setAvatarUpdateSignal(s => !s)
  }, []);

  const overlayContainer = useRef(null);
  const [showChangeIconDialog, setShowChangeIconDialog] = useState(false);

  const [avatarURL, setAvatarURL] = useState(null);
  useEffect(() => {
    setAvatarURL(null);
    if (!user) {
      return;
    }

    storageRef.child('UserAvatar/' + user.uid).getDownloadURL()
      .catch((e) => {
        return storageRef.child('UserAvatar/default_male.png').getDownloadURL()
      })
      .then(url => {
        setAvatarURL(url);
      })
  }, [user, avatarUpdateSignal])

  // notifications
  const subjectUser = useUserSubject()
  const subjectUserDoc = useMemo(() => new ReplaySubject<any>(1), [])
  //const subjectTropyNotifications = useMemo(() => new Subject<any>(), [])
  const pendingTropies = useRef<Tropy[]>([])
  const [pendingTropiesReady, setPendingTropiesReady] = useState(false)
  const [notificationTropy, setNotificationTropy] = useState<TropyInterface>({
    color: "string",
    condition: {},
    name: "string",
  })
  const [visualShowTropyNotify, setVisualShowTropyNotify] = useState(false)

  
  useEffect(() => {
    const subscriptions = new Subscription();

    subscriptions.add(
      subjectUser
        .pipe(mergeMap(user => 
          firebase.firestore()
            .collection('users').doc(user.uid)
            .get()
        ))
        .pipe(problemOperators.convertDocSnapshotToDoc)
        .subscribe(subjectUserDoc)
    )

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
    const interval = 5000;
    const animationInterval = 200;

    setup();
    function setup() {
      const currentItem = pendingTropies.current.shift();
      if (!currentItem)
        return;

      setNotificationTropy(currentItem)
      setVisualShowTropyNotify(true)

      intervalHandle = setTimeout(teardown, interval + animationInterval);
    }
    function teardown() {
      setVisualShowTropyNotify(false)

      intervalHandle = setTimeout(setup, animationInterval);
    }

    return () => {
      clearTimeout(intervalHandle)
    }
  }, [pendingTropiesReady])
  
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
      <nav className="homeNav">
        <div className="session">
          <IconLink title="Home" icon={<HomeIcon/>} />
          <IconLink title="Challenge" icon={<ChallengeIcon/>} />
          <div className="item" style={{paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
          {!userLoaded || (user && !avatarURL) ? <div className="group relative flex items-center">
              <div className="w-16 h-16 rounded-full">
                <LoadingIcon
                  style={{
                    width: "100%",
                  }}/>
              </div>
            </div> :
          user ? (
            <div className="group relative flex items-center">
              <div
                style={{
                  backgroundImage: `url(${avatarURL})`,
                  backgroundColor: "rgba(var(--color-text-rgb), 0.25)",
                  backgroundSize: "cover"
                }}
                className="w-12 h-12 rounded-full"
              />
              <div
                style={{top: "100%", right: -10, marginTop: -10, background: "#fff", whiteSpace: "nowrap"}}
                className="group-hover:block absolute shadow-xl rounded-2xl hidden text-center"
              >
                <div className="px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-t-2xl"
                  onClick={(e) => {
                    //showChangeIcon();
                    setShowChangeIconDialog(true);
                  }}
                >Change Icon</div>
                <div className="px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-b-2xl"
                  onClick={(e) => {
                    firebase.auth().signOut()
                  }}
                >Logout</div>
              </div>
            </div>
          ) : (
            <IconLink title="Login" link="login" />
          )}
          </div>
        </div>
      </nav>

      <div className="topics session">
        <Topic
          name="Computer Science"
          color="#EE2E22"
          overlay={<ComputerIcon/>}
          link="quiz/CSE"
        />
        <Topic
          name="Academics"
          color="#476cff"
          overlay={<AirplaneIcon/>}
          link="quiz/Academics"
        />
        <Topic
          name="Texting"
          color="#0bac61"
          overlay={<ChatIcon/>}
          link="quiz/Casual"
        />
      </div>
    </div>

    <div className="overlay-container" ref={overlayContainer}>
      <ChangeAvatarDialog shown={showChangeIconDialog} onSave={() => {
        setShowChangeIconDialog(false);
        triggerAvatarUpdateSignal(); // update avatar after save
      }} onClose={() => {
        setShowChangeIconDialog(false);
      }}/>
      <div className="overlay-layout right transparent">
        <NotificationBanner shown={visualShowTropyNotify} message="トロフィーをゲットしました！" tropy={notificationTropy}/>
      </div>
    </div>
    </>
  );
}
