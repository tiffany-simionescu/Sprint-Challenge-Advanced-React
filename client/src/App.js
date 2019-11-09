import React from 'react';
import './App.css';
import PlayerData from './components/PlayerData.js';
import DarkModeSwitch from './components/DarkModeSwitch.js';

function App() {
  return (
    <div data-testid="player-card" className="App">
      <DarkModeSwitch />
      <PlayerData />
    </div>
  );
}

export default App;
