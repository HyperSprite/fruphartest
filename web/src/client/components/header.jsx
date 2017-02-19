import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

import router from './../router';

class Header extends Component {
  renderLinks() {
    return this.props.authenticated ? (
      [
        <li className="nav-item" key={0}>
          <Link to="/user-wizard">User Wizard</Link>
        </li>,
        <li className="nav-item" key={1}>
          <Link to="/todos">Todos</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>,
      ]
    ) : (
      [
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
      ]
    );
  }

  render() {
    return (
      <div>
      <Navbar inverse fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Brand</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <div className="nav-flex-display" >
          <div className="nav-flex-sidebar" />
          <div className="nav-flex-main" >
            <Navbar.Collapse>
              <ul className="nav navbar-nav">
                {this.renderLinks()}
                <li className="nav-item">
                  <Link to="/user-profile">User Profile</Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </div>
          <div className="nav-flex-sidebar" />
        </div>
      </Navbar>
    </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(
  mapStateToProps,
)(Header);
