import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from '../form-fields/FormField';
import { Form, Button } from 'semantic-ui-react';

class ProductForm extends Component {
  render() {
    return (
      <div id="productForm">
        <h2>
          {this.props.formTitle}
        </h2>
        <Form onSubmit={this.props.handleSubmit(this.props.handleEntry)}>
          <Field
            label="Product Name"
            name="name"
            type="text"
            component={FormField}
          />
          <Field label="Price" name="price" type="text" component={FormField} />
          <Field
            label="Amazon Link"
            name="link"
            type="text"
            component={FormField}
          />
          <Field
            label="Image URL"
            name="imageURL"
            type="text"
            component={FormField}
          />
          <Field
            label="Description"
            name="description"
            type="text"
            component={FormField}
          />
          <Field
            label="Priority"
            name="priority"
            type="number"
            component={FormField}
          />
          <div className="form-controls">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}

ProductForm = reduxForm({
  form: 'productForm'
})(ProductForm);

export default ProductForm;
