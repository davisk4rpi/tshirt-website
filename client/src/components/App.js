import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/styles/App.css';
import Header from './Header';
import Dashboard from './Dashboard';
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
          <Container>
            <Route exact path="/login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
          </Container>
        </main>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
