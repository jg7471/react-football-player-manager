import React, { useEffect, useState } from 'react';
import backImg from '../../../assets/backImg.jpg';
import styles from './MainPage.module.scss';
import MakePlayer from '../../makeplayer/MakePlayer';

const MainPage = () => {
  // PlayerContext를 useContext 훅을 사용하여 불러오기
  const [playerData, setPlayerData] = useState(null); // playerData 상태 선언

  const addPlayer = (newPlayerData) => {
    setPlayerData(newPlayerData); // 상태 업데이트
    localStorage.setItem('playerData', JSON.stringify(newPlayerData)); // 로컬 스토리지에 저장
  };

  useEffect(() => {
    const storedPlayerData = localStorage.getItem('playerData');
    if (storedPlayerData) {
      setPlayerData(JSON.parse(storedPlayerData)); // 로컬 스토리지에서 데이터 가져오기
    }
  }, []);

  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터 가져오기
  //   const storedPlayerData = localStorage.getItem('playerData');
  //   if (storedPlayerData) {
  //     console.log('Stored Player Data:', JSON.parse(storedPlayerData));
  //   }
  // }, []);

  return (
    <>
      <MakePlayer onAdd={addPlayer} playerData={playerData} />

      <div
        className={styles['main-bg']}
        style={{ backgroundImage: `url(${backImg})` }}
      >
        player
      </div>
    </>
  );
};

export default MainPage;
