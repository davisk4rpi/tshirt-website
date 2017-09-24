import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import { loginUser } from '../actions';

class Login extends Component {
  onLogin = (values, dispatch) => {
    this.props.loginUser(values);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <AuthForm formTitle="Log In" handleEntry={this.onLogin} />
      </div>
    );
  }
}

export default connect(null, { loginUser })(Login);
