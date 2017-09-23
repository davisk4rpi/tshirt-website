import React, { Component } from 'react';

import '../assets/styles/App.css';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Signup />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
