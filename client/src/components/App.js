import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/styles/App.css';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Container className="App">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <p className="App-intro" />
          </Container>
        </main>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
