import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap modules from reaact-bootstrap

//Our Nav Bar
import Header from './components/Header';
// A sample of loading a bunch of stuff at once using map
import Alerts from './components/Alerts';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "Container">
        <h1 className="App-header">Eric Turner</h1>
        <Alerts />
        <p>This is a React Test Page</p>
        <p>Top Vacation Spots</p>
        <ul>
          <li>Italy</li>
          <li>UK</li>
          <li>California</li>
        </ul>
      </div>
      
    </div>
  );
}

export default App;
