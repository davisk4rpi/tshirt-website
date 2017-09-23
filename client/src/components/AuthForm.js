import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './form-fields/FormField';
import { Form, Button } from 'semantic-ui-react';

class AuthForm extends Component {
  render() {
    return (
      <div id="eventForm">
        <h2>
          {this.props.formTitle}
        </h2>
        <Form onSubmit={this.props.handleSubmit(this.props.handleEntry)}>
          <Field
            label="Username"
            name="username"
            type="text"
            component={FormField}
          />
          <Field
            label="Password"
            name="password"
            type="password"
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

AuthForm = reduxForm({
  form: 'authForm'
})(AuthForm);

export default AuthForm;
