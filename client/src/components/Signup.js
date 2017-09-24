import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import { createUser } from '../actions';

class Signup extends Component {
  onSignUp = (values, dispatch) => {
    this.props.createUser(values);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <AuthForm formTitle="Sign Up" handleEntry={this.onSignUp} />
      </div>
    );
  }
}

export default connect(null, { createUser })(Signup);
