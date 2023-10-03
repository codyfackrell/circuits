import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/HomePage/Home';
import TrackPage from './components/TrackPage/TrackPage';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trackpage/:trackId" element={<TrackPage/>} />
      </Routes>
    </div>
  );
}

export default App;
