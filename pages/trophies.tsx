import Head from 'next/head';

import NavgigationBar from '@/components/NavigationBar';

import { useTrophiesSubject } from '@/common/Tropies/hooks';
import { useEffect, useState } from 'react';
import { Tropy } from '@/common/Tropies/Types';

export default function App(props) {
  const subjectAllTrophies = useTrophiesSubject();
  const [trophies, setTrophies] = useState<Tropy[]>([]);

  useEffect(() => {

    subjectAllTrophies.subscribe(trophies => {
      setTrophies(trophies)
    })
  }, [subjectAllTrophies]);
  

  return <>
    <div className="home-container">
      <Head>
        <title>Trophies</title>
      </Head>
      <NavgigationBar language={props.language}/>
      <div className="tropies-container session">
        <div className="tropies">
          開発途中です！もうしばらくお待ちください！
          <br/>
          Development in progress. Please wait for a while.
          {/* {trophies.map(trophy => {
            return <div key={trophy._ref.id}>{trophy.name}</div>
          })} */}
        </div>
      </div>
    </div>
  </>;
}
