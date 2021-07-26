import Head from 'next/head';

import trophyStyles from '@/styles/Trophy.module.css'

import { TrophyIcon } from '@/assets/Icons'

import NavgigationBar from '@/components/NavigationBar';

import { useEffect, useState } from 'react';

import { Tropy } from '@/common/Tropies/Types';
import { LoadingIcon } from '@/assets/Icons'
import { useTrophiesWithStatusSubject, useTrophiesSubject } from '@/common/Tropies/hooks';
import { useUserDocSubject, useUserSubject } from '@/common/User/hooks';

export default function App(props) {
  const [trophies, setTrophies] = useState<Tropy[]>(null);

  const subjectUser = useUserSubject();
  const subjectUserDoc = useUserDocSubject(subjectUser);

  const subjectTrophiesWithStatus = useTrophiesWithStatusSubject(subjectUserDoc);
  
  useEffect(() => {

    subjectTrophiesWithStatus.subscribe(trophies => {
      setTrophies(trophies)
    })
  }, [subjectTrophiesWithStatus]);
  

  return <>
    <div className="home-container">
      <Head>
        <title>Trophies</title>
      </Head>
      <NavgigationBar language={props.language}/>
      <div className="tropies-container session">
        <div className="tropies">
          {trophies ? trophies.map(trophy => {
            return <div key={trophy._ref.id} className="item">
              <div className={`icon ${trophy.achived ? trophyStyles[trophy.color] : trophyStyles.hidden} ${trophyStyles.trophy}`}><TrophyIcon/></div>
              <div className="details">
                <div className="name">{trophy.achived ? trophy.name : "？？？（？？？）"}</div>
                <div className="description">{trophy.description}</div>
              </div>
            </div>
          }) : <div className="loading"><LoadingIcon/></div>}
        </div>
      </div>
    </div>
  </>;
}
