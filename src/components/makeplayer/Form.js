import React from 'react';
import MakePlayer from './MakePlayer';

const onSave = ({ playerData }) => {
  localStorage.setItem('playerData', JSON.stringify(playerData));
};

const Form = () => {
  //Form 컴포넌트의 내부에 MakePlayer 컴포넌트를 렌더링(모듈화)
  return <MakePlayer onSave={onSave} />;
};

export default Form;
