import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { fetchProducts, deleteProduct } from '../../actions';

import ProductListItem from './ProductListItem';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleDelete = id => {
    this.props.deleteProduct(id);
  };

  renderProducts() {
    return this.props.products.map(product => {
      return (
        <ProductListItem
          product={product}
          key={product._id}
          handleDelete={this.handleDelete}
        />
      );
    });
  }

  render() {
    return (
      <section id="productList">
        <List divided relaxed size="massive">
          {this.renderProducts()}
        </List>
      </section>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  ProductList
);
