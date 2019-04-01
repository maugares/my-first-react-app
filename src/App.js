import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Import the component Title
import Title from './components/Title' ;
// Import the component LightSwitch
import LightSwitch from './components/LightSwitch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
        </header>

        <main>
          {/* Use the component Title */}
          <Title content="Some Simple Title" />
          {/* Call the component LightSwitch */}
          <LightSwitch />
        </main>
      </div>
    );
  }
}

export default App;
