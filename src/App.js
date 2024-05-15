import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Stat from './components/makeplayer/Stat';
import ManagePlayer from './components/makeplayer/MakePlayer';
import Main from './components/mainpage/MainPage';
// import NavigationBar from './components/navigationbar/NavigationBar';

function App() {
  return (
    <>
      <Header />
      {/* <NavigationBar /> */}
      <div id="main">
        <ManagePlayer />
        <Main />
      </div>
    </>
  );
}

export default App;
