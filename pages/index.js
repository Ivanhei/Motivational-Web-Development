import Link from 'next/link'

import {
  useState,
  useEffect,
} from 'react';

import firebase from '@/common/firebase_init';
import 'firebase/auth'

const iconHome = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: "100%" }}
    viewBox="0 0 52.064 44.254"
  >
    <path
      id="Icon_material-home"
      data-name="Icon material-home"
      d="M23.826,48.754V33.135H34.238V48.754H47.254V27.929h7.81L29.032,4.5,3,27.929h7.81V48.754Z"
      transform="translate(-3 -4.5)"
      fill="#333"
    />
  </svg>
);

const iconAvatar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: "100%" }}
    viewBox="0 0 37.697 37.697"
  >
    <path
      id="Icon_material-person"
      data-name="Icon material-person"
      d="M24.848,24.848a9.424,9.424,0,1,0-9.424-9.424A9.422,9.422,0,0,0,24.848,24.848Zm0,4.712C18.558,29.56,6,32.717,6,38.984V43.7H43.7V38.984C43.7,32.717,31.139,29.56,24.848,29.56Z"
      transform="translate(-6 -6)"
      fill="#333"
    />
  </svg>
);

const iconChallenge = (
  <svg
    style={{ height: "100%" }}
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M999.667 159.302C999.565 152.975 999.463 147.464 999.463 142.872H818.957C822.427 65.6189 820.08 0 820.08 0H501.925C501.211 0 500.395 3.87774e-07 499.68 0.102052C498.966 3.87774e-07 498.15 0 497.435 0H178.465C178.465 0 176.118 65.6189 179.587 142.872H0.51019H0V188.795V189.509V214.308H0.408152C2.24484 272.579 11.5303 350.444 50.3048 430.248C83.161 497.908 130.507 554.546 190.913 598.53C240.912 634.963 298.155 661.19 361.011 676.804C397.336 715.583 433.151 736.912 464.375 745.484V824.982C459.885 848.658 432.845 928.564 243.973 928.564H214.28V1000H785.693V928.564H756.306C534.679 928.666 535.7 818.553 535.7 818.553V745.484C566.923 736.912 602.024 715.583 638.146 677.11C701.512 661.496 758.857 635.167 809.162 598.53C869.568 554.546 916.914 497.908 949.77 430.248C1002.63 321.359 1000.69 215.94 999.667 159.302ZM114.385 399.02C82.1406 332.585 73.6715 265.639 71.8348 214.308H184.485C186.423 234.208 188.872 253.801 191.934 272.273C210.913 385.447 237.034 485.458 286.421 573.63C211.015 535.463 151.731 475.865 114.385 399.02ZM885.486 399.02C847.936 476.273 788.142 536.177 712.021 574.344C761.612 485.968 787.53 385.754 806.509 272.273C809.57 253.801 812.019 234.208 813.957 214.308H928.036C926.199 265.639 917.832 332.585 885.486 399.02Z"
      fill="#333333"
    />
  </svg>
);
const logoComputer = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="43%"
    /*width="74.247" height="74.259"*/ viewBox="0 0 74.247 74.259"
  >
    <path
      id="Icon_open-monitor"
      d="M3.158.01A4.64,4.64,0,0,0,0,4.65v46.4a4.64,4.64,0,0,0,4.64,4.64h23.2v9.28h-9.28a9.307,9.307,0,0,0-9.28,9.28h55.68a9.307,9.307,0,0,0-9.28-9.28H46.4V55.69H69.6a4.64,4.64,0,0,0,4.64-4.64V4.65A4.64,4.64,0,0,0,69.6.01H4.643a4.64,4.64,0,0,0-.835,0,4.64,4.64,0,0,0-.557,0ZM9.283,9.29h55.68V46.41H9.283Z"
      transform="translate(0.003 0.009)"
      fill="#ffff97"
    />
  </svg>
);

const logoAirplane = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="43%"
    viewBox="0 0 86.967 73.924"
  >
    <path
      id="Icon_ionic-ios-airplane"
      d="M74.337,35.183c-.652,0-2.84.02-3.454.059l-12.452.337a.353.353,0,0,1-.326-.178L39.437,6.529a3.061,3.061,0,0,0-2.59-1.466H32.3c-1.074,0-1.439,1.11-1.055,2.14l9.612,28.3a.387.387,0,0,1-.345.535l-23.484.357a1.527,1.527,0,0,1-1.266-.614l-7.1-8.917a3.011,3.011,0,0,0-2.418-1.209H3.021a.786.786,0,0,0-.729,1.05L6.11,40.316a3.328,3.328,0,0,1,0,2.358L2.291,56.288a.786.786,0,0,0,.729,1.05h3.2a3.068,3.068,0,0,0,2.418-1.209l7.233-9.056a1.552,1.552,0,0,1,1.266-.614l23.35.535a.392.392,0,0,1,.345.535L31.225,75.847c-.384,1.03-.019,2.14,1.055,2.14h4.547a3.037,3.037,0,0,0,2.59-1.466L58.105,47.668a.374.374,0,0,1,.326-.178l12.452.337c.633.04,2.8.059,3.454.059,8.5,0,13.872-2.834,13.872-6.341S82.856,35.183,74.337,35.183Z"
      transform="translate(-1.742 -4.563)"
      fill="#88def9"
      stroke="rgba(0,0,0,0)"
      strokeWidth="1"
    />
  </svg>
);

const logoChat = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="43%"
    viewBox="0 0 83.406 74.55"
  >
    <path
      id="Icon_metro-bubbles"
      d="M77.566,67.259a8.048,8.048,0,0,0,4.411,7.181v1.1a16.41,16.41,0,0,1-14.146-4.966,22.163,22.163,0,0,1-5.706.741c-10.964,0-19.852-7.9-19.852-17.646,0-6.091,3.472-11.461,9.013-14.786a21.291,21.291,0,0,1,10.839-2.86c10.964,0,19.852,7.9,19.852,17.646A16.277,16.277,0,0,1,78.3,63.9a8.006,8.006,0,0,0-.734,3.357ZM37.863,5.143c19.194,0,34.809,12.45,35.28,27.952a27.048,27.048,0,0,0-11.017-2.31,26.268,26.268,0,0,0-17.517,6.492,21.775,21.775,0,0,0-7.573,16.393,21.151,21.151,0,0,0,1.912,8.808c-.36.009-.722.015-1.085.015a43.587,43.587,0,0,1-5.5-.348c-7.581,7.581-16.629,8.94-25.378,9.14V69.428c4.724-2.314,8.823-6.53,8.823-11.348a13.313,13.313,0,0,0-.149-1.978C7.675,50.845,2.571,42.816,2.571,33.817c0-15.836,15.8-28.674,35.292-28.674Z"
      transform="translate(-0.571 -3.143)"
      fill="#60ffb5"
      stroke="rgba(230,199,96,0)"
      strokeWidth="4"
    />
  </svg>
);

  /*<svg xmlns="http://www.w3.org/2000/svg" width="86.967" height="73.924" viewBox="0 0 86.967 73.924">
<path id="Icon_ionic-ios-airplane" data-name="Icon ionic-ios-airplane" d="M74.337,35.183c-.652,0-2.84.02-3.454.059l-12.452.337a.353.353,0,0,1-.326-.178L39.437,6.529a3.061,3.061,0,0,0-2.59-1.466H32.3c-1.074,0-1.439,1.11-1.055,2.14l9.612,28.3a.387.387,0,0,1-.345.535l-23.484.357a1.527,1.527,0,0,1-1.266-.614l-7.1-8.917a3.011,3.011,0,0,0-2.418-1.209H3.021a.786.786,0,0,0-.729,1.05L6.11,40.316a3.328,3.328,0,0,1,0,2.358L2.291,56.288a.786.786,0,0,0,.729,1.05h3.2a3.068,3.068,0,0,0,2.418-1.209l7.233-9.056a1.552,1.552,0,0,1,1.266-.614l23.35.535a.392.392,0,0,1,.345.535L31.225,75.847c-.384,1.03-.019,2.14,1.055,2.14h4.547a3.037,3.037,0,0,0,2.59-1.466L58.105,47.668a.374.374,0,0,1,.326-.178l12.452.337c.633.04,2.8.059,3.454.059,8.5,0,13.872-2.834,13.872-6.341S82.856,35.183,74.337,35.183Z" transform="translate(-1.742 -4.563)" fill="#88def9" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
</svg>
*/

function LogoTopic(props) {
  const color = props.color || "#333333";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      /*width="179" height="179"*/ viewBox="0 0 179 179"
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

function Spacing(props) {
  return <div className="flex-grow" />;
}

function handleSelectChallenge(i) {
  console.log("hi" + i);
}

function Topic(props) {
  return (
    <a className="block p-5" href={props.link}>
      <div className="grid justify-items-center">
        <div className="relative w-20 h-20">
          <div className="absolute w-full h-full">
            {props.img}
            {<LogoTopic color={props.color} />}
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

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const loggedInObservable = new rxjs.BehaviorSubject(null);

  useEffect(() => {
    const unsub_auth = firebase.auth().onAuthStateChanged(user => {
      // loggedInObservable.next(user)
      setLoggedIn(!!user);
    });

    return () => {
      unsub_auth();
    };
  }, []);
  
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
          <ItemLink title="Home" img={iconHome} />
          <Spacing />
          <ItemLink title="Challenge" img={iconChallenge} />
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
                overlay={logoComputer}
                link="quiz_firebase"
              />
            </div>
            <div>
              <Topic
                name="Academics"
                color="#476cff"
                overlay={logoAirplane}
                link="quiz_firebase"
              />
            </div>
            <div>
              <Topic
                name="Friends"
                color="#0bac61"
                overlay={logoChat}
                link="quiz_firebase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
