import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is our live code for our first Web App
        </p>
        <a
          className="App-link"
          href="https://strive.school"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn more about strive.school
        </a>
      </header>
    </div>
  );
}

export default App;
