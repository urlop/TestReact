import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'fetch-api';
import 'lodash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div id="container">
        </div>
      </div>
    );
  }
}

export default App;
