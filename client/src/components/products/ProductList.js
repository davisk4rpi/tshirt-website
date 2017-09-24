import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

import ProductListItem from './ProductListItem';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map(product => {
      return <ProductListItem product={product} key={product.id} />;
    });
  }

  render() {
    return (
      <section>
        {this.renderProducts()}
      </section>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts })(PoductList);
