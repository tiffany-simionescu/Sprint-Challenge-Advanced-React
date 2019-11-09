import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import '../styles.scss'

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="topButton">
      <h1 className="title">Women's World Cup Players</h1>
      <div className="dark-mode__toggle">
        <button 
            onClick={toggleMode} 
            className={darkMode ? 'toggle toggled' : 'toggle'} />
      </div>
    </div>
  )
}

export default DarkModeSwitch;
