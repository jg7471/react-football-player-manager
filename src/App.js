import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './components/pages/mainpage/MainPage';
import Squad from './components/pages/squad/Squad';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Squad" element={<Squad />} />
      </Routes>
    </div>
  );
}
