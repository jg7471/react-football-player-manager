import React, { useEffect } from 'react';
import MakePlayer from './MakePlayer';

const Form = () => {
  const addPlayer = (playerData) => {
    localStorage.setItem('playerData', JSON.stringify(playerData)); //저장 a1
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터 가져오기
    const storedPlayerData = localStorage.getItem('playerData');
    if (storedPlayerData) {
      console.log('Stored Player Data:', JSON.parse(storedPlayerData));
    }
  }, []);

  //Form 컴포넌트의 내부에 MakePlayer 컴포넌트를 렌더링(모듈화)
  return <MakePlayer onAdd={addPlayer} />;
};

export default Form;
