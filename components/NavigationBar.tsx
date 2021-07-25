import Link from 'next/link'

import firebase from '@/common/firebase_init';
import 'firebase/storage'
import 'firebase/auth'

const storageRef = firebase.storage().ref();

import {
  HomeIcon,
  ChallengeIcon,
  LoadingIcon,
} from '@/assets/Icons';

import {
  useLoadedUser,
} from '@/common/utils';

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';

import ChangeAvatarDialog from '@/components/ChangeAvatarDialog'
import { LanguageTag } from '@/common/Strings/Types'
import { HomeStrings, homeStringsPack } from '@/common/Strings/home'


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

export default function NavgigationBar({language: languageTag}: {language: LanguageTag}) {
  const {userLoaded, user} = useLoadedUser();
  const [avatarUpdateSignal, setAvatarUpdateSignal] = useState(false);
  const triggerAvatarUpdateSignal = useCallback(() => {
    setAvatarUpdateSignal(s => !s)
  }, []);

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


  // UI lang
  const strings: HomeStrings = useMemo(() => homeStringsPack[languageTag], [languageTag])

  return <>
  <nav className="homeNav">
    <div className="session">
      <IconLink title={strings.nav_home} icon={<HomeIcon/>} link="/" />
      <IconLink title={strings.nav_trophies} icon={<ChallengeIcon/>} link="/trophies" />
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
                setShowChangeIconDialog(true);
              }}
            >{strings.user_change_avatar}</div>
            <div className="px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-b-2xl"
              onClick={(e) => {
                firebase.auth().signOut()
              }}
            >{strings.user_logout}</div>
          </div>
        </div>
      ) : (
        <IconLink title={strings.user_login} link="/login" />
      )}
      </div>
    </div>
  </nav>

  <div className="overlay-container">
    <ChangeAvatarDialog shown={showChangeIconDialog} onSave={() => {
      setShowChangeIconDialog(false);
      triggerAvatarUpdateSignal(); // update avatar after save
    }} onClose={() => {
      setShowChangeIconDialog(false);
    }} language={languageTag}/>
  </div>
  </>
}