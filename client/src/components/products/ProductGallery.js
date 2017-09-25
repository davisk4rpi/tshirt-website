import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid } from 'semantic-ui-react';
import { fetchProducts, deleteProduct } from '../../actions';

import ProductGalleryItem from './ProductGalleryItem';

class ProductGallery extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleDelete = id => {
    this.props.deleteProduct(id);
  };

  renderProducts() {
    return this.props.products.map(product => {
      return (
        <ProductGalleryItem
          product={product}
          key={product.name}
          handleDelete={this.handleDelete}
        />
      );
    });
  }

  render() {
    return (
      <section id="productGallery">
        <Grid centered as={Card.Group}>
          {this.renderProducts()}
        </Grid>
      </section>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(
  ProductGallery
);
