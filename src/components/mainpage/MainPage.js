import React, { createContext, useContext } from 'react';
import backImg from '../../assets/backImg.jpg';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const value = useContext(MyContext);

  return (
    <div className="main-bg" style={{ backgroundImage: `url(${backImg})` }}>
      player
    </div>
    <div>Received: {value}</div>;
  );
};

export default MainPage;
