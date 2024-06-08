import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './components/pages/mainpage/MainPage';
import Squad from './components/pages/squad/Squad';
import PlayerContext from './components/config/PlayerContext';

export default function App() {
  return (
    <>
      <PlayerContext.Provider>
        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Squad" element={<Squad />} />
        </Routes>
      </PlayerContext.Provider>
    </>
  );
}
