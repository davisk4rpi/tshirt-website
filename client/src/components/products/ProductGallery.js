import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
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
        <Card.Group itemsPerRow={4} stackable>
          {this.renderProducts()}
        </Card.Group>
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
