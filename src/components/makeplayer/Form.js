import React from 'react';
import MakePlayer from './MakePlayer';

const Form = () => {
  const addPlayer = (playerData) => {
    localStorage.setItem('playerData', JSON.stringify(playerData)); //저장 a1
  };

  //Form 컴포넌트의 내부에 MakePlayer 컴포넌트를 렌더링(모듈화)
  return <MakePlayer onAdd={addPlayer} />;
};

export default Form;
