import Link from 'next/link'
import Head from 'next/head'

import firebase from '@/common/firebase_init';
import 'firebase/auth'

import { 
  HomeIcon, 
  ChallengeIcon, 
  ComputerIcon, 
  AirplaneIcon, 
  ChatIcon,
  LoadingIcon,
} from '@/assets/Icons';
import { useLoadedUser } from '@/common/utils';

function TopicIconBackground(props) {
  const color = props.color || "#333333";
  return (
    <svg height="100%" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35ZM66.1112 35C66.1112 52.1822 52.1822 66.1111 35 66.1111C17.8179 66.1111 3.88893 52.1822 3.88893 35C3.88893 17.8178 17.8179 3.88892 35 3.88892C52.1822 3.88892 66.1112 17.8178 66.1112 35Z"/>
      <path fill={color} d="M35 61.4446C49.6049 61.4446 61.4444 49.605 61.4444 35.0001C61.4444 20.3952 49.6049 8.55566 35 8.55566C20.3951 8.55566 8.55554 20.3952 8.55554 35.0001C8.55554 49.605 20.3951 61.4446 35 61.4446Z"/>
    </svg>
  );
}

function IconLink({ link, icon, title }) {
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
            <icon-bg>
              <TopicIconBackground color={color} />
            </icon-bg>
            <icon-main>{overlay}</icon-main>
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
  const [userLoaded, user] = useLoadedUser();
  
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
    <div className="home-container">
      <Head>
        <title>Motivational Web Development</title>
      </Head>
      <nav className="homeNav">
        <div className="session">
          <IconLink title="Home" icon={<HomeIcon/>} />
          <IconLink title="Challenge" icon={<ChallengeIcon/>} />
          <div className="item" style={{paddingTop: "1.5rem", paddingBottom: "1.5rem"}}>
          {!userLoaded ? <div className="group relative flex items-center">
              <div className="w-12 h-12 rounded-full">
                <LoadingIcon 
                  style={{
                    width: "100%",
                  }}/>
              </div>
            </div> :
          user ? (
            <div className="group relative flex items-center">
              <div
                height="100%"
                width="100%"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1619218889447-95dc25727df8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDQ2ODM1Nw&ixlib=rb-1.2.1&q=85)",
                  backgroundSize: "cover"
                }}
                className="w-12 h-12 rounded-full"
                src=""
              />
              <div
                style={{top: "100%", right: -10, marginTop: -10, background: "#fff"}} 
                className="group-hover:block absolute shadow-xl rounded-2xl hidden text-center"
              >
                <div className="px-8 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-t-2xl">Settings</div>
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
    </div>);
}
