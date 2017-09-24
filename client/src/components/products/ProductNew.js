import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { createProduct } from '../../actions';

class ProductNew extends Component {
  onEntry = async (values, dispatch) => {
    await this.props.createProduct(values);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <ProductForm formTitle="Add a new Product" handleEntry={this.onEntry} />
      </div>
    );
  }
}

export default connect(null, { createProduct })(ProductNew);
