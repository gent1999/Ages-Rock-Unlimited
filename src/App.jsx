// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
    </div>
  );
}

export default App;
