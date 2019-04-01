import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import the component User
import UserBoard from './components/UserBoard';
// Import the component UserBoard

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
        </header>

        <main>
          <UserBoard />
        </main>
      </div>
    );
  }
}

export default App;
