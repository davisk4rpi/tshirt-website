import React, { Component } from 'react';
import ProductList from './products/ProductList';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
    return (
      <section id="dashboard">
        <Button
          as={Link}
          to="/products/new"
          size="huge"
          icon="plus"
          circular
          color="green"
        />
        <ProductList />
      </section>
    );
  }
}

export default Dashboard;
