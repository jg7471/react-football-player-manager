import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/mainpage/MainPage';
import Form from './components/makeplayer/Form';
// import NavigationBar from './components/navigationbar/NavigationBar';

function App() {
  return (
    <>
      <Header />
      <div id="main">
        <Form />
        {/* Form 안에 -> MakePlayer 있음 */}
        <Main />
      </div>
    </>
  );
}

export default App;
