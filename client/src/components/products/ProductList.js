import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { fetchProducts } from '../../actions';

import ProductListItem from './ProductListItem';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map(product => {
      return <ProductListItem product={product} key={product.name} />;
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

export default connect(mapStateToProps, { fetchProducts })(ProductList);
