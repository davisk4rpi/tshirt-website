import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/styles/App.css';
import Header from './Header';
import ProductGallery from './products/ProductGallery';
import Dashboard from './Dashboard';
import ProductNew from './products/ProductNew';
import Login from './Login';
import Banner from './Banner';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <div id="bg-image" />
          <Header />
          <Route exact path="/" component={Banner} />
          <Container>
            <Route exact path="/" component={ProductGallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/products/new" component={ProductNew} />
          </Container>
        </main>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
