import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <Menu.Item key="1">
            <Link to="/login">Log In</Link>
          </Menu.Item>,
          <Menu.Item key="2">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
        ];
      default:
        return [
          <Menu.Item key="1">
            <a href="/api/logout">Logout</a>
          </Menu.Item>,
          <Menu.Item key="2">
            <Link to="/settings">Settings</Link>
          </Menu.Item>,
          <Menu.Item key="3">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
        ];
    }
  }

  render() {
    return (
      <header id="header">
        <Menu pointing secondary>
          <Menu.Item header>Emphasis Designs</Menu.Item>
          {this.renderContent()}
        </Menu>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
