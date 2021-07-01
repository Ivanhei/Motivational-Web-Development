import Link from 'next/link'

import {
  useState,
  useEffect,
} from 'react';

import firebase from '@/common/firebase_init';
import 'firebase/auth'

import { 
  HomeIcon, 
  ChallengeIcon, 
  ComputerIcon, 
  AirplaneIcon, 
  ChatIcon 
} from '@/assets/Icons';

function LogoTopic(props) {
  const color = props.color || "#333333";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%" viewBox="0 0 179 179"
    >
      <g
        id="グループ_35"
        transform="translate(-516 -297)"
      >
        <g
          id="楕円形_3"
          transform="translate(516 297)"
          fill="rgba(255,255,255,0)"
          stroke={color}
          strokeWidth="10"
        >
          <circle cx="89.5" cy="89.5" r="89.5" stroke="none" />
          <circle cx="89.5" cy="89.5" r="84.5" fill="none" />
        </g>
        <g
          id="楕円形_4"
          transform="translate(537 318)"
          fill={color}
          stroke="rgba(112,112,112,0)"
          strokeWidth="1"
        >
          <circle cx="68" cy="68" r="68" stroke="none" />
          <circle cx="68" cy="68" r="67.5" fill="none" />
        </g>
      </g>
    </svg>
  );
}

function ItemLink(props) {
  return (
    <div className="flex">
      <Link href={props.link ? props.link : "#"}>
        <a className="p-4 hover:bg-gray-100">
          <span className="flex items-center">
            {props.img ? <div style={{ height: "36px", width: "36px" }} className="mr-5">
              {props.img}
            </div> : null}
            <span style={{ fontWeight: "bold" }} className="mt-1.5">
              {props.title || "TBD"}
            </span>
          </span>
        </a>
      </Link>
    </div>
  );
}

function Spacing() {
  return <div className="flex-grow" />;
}

function Topic(props) {
  return (
    <a className="block p-5" href={props.link}>
      <div className="grid justify-items-center">
        <div className="relative w-20 h-20">
          <div className="absolute w-full h-full">
            {props.img}
            <LogoTopic color={props.color} />
          </div>
          <div className="absolute flex justify-center items-center  w-full h-full">
            {props.overlay}
          </div>
        </div>
        <span style={{ fontWeight: "bold" }} className="mt-4">
          {props.name || 1}
        </span>
      </div>
    </a>
  );
}

export default function App(props) {
  const loggedIn = !!props.user;
  
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
    <div className="h-full">
      {/*Navigation*/}
      <nav className="flex px-10 border-b-2 border-gray-100">
        <div className="flex flex-auto">
          <Spacing />
          <ItemLink title="Home" img={<HomeIcon/>} />
          <Spacing />
          <ItemLink title="Challenge" img={<ChallengeIcon/>} />
          <Spacing />
          <Spacing />
          { loggedIn ? (
            <div className="group relative flex items-center">
              <div
                height="100%"
                width="100%"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1619218889447-95dc25727df8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDQ2ODM1Nw&ixlib=rb-1.2.1&q=85)",
                  backgroundSize: "cover"
                }}
                className="w-9 h-9 rounded-full"
                src=""
              />
              <div
                style={{top: "100%", right: -10, marginTop: -10, background: "#fff"}} 
                className="group-hover:block absolute shadow-xl rounded-2xl hidden text-center"
              >
                <div className="px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-t-2xl">Settings</div>
                {/* <div className="px-10 py-5 hover:bg-gray-100 NO_ROUNDED">Html</div> */}
                <div className="px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-b-2xl"
                  onClick={(e) => {
                    firebase.auth().signOut()
                  }}
                >Logout</div>
              </div>
            </div>
          ) : (
            <ItemLink title="Login" link="login" />
          )}

          <Spacing />
        </div>
      </nav>

      {/*Body*/}
      <div className="flex p-10 m-10 justify-center">
        <div className="grid p-5 m-10 justify-items-center">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <Topic
                name="Computer Science"
                color="#f1f109"
                overlay={<ComputerIcon/>}
                link="quiz/CSE"
              />
            </div>
            <div>
              <Topic
                name="Academics"
                color="#476cff"
                overlay={<AirplaneIcon/>}
                link="quiz/Academics"
              />
            </div>
            <div>
              <Topic
                name="Friends"
                color="#0bac61"
                overlay={<ChatIcon/>}
                link="quiz/Casual"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
