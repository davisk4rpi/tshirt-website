import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../assets/styles/App.css';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <Route exact path="/signup" component={Signup} />
          <p className="App-intro" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
