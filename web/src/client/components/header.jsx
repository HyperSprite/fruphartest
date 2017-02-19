import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

import * as actions from '../actions';
import router from './../router';

import Signin from './auth/signin';
import Signup from './auth/signup';

class Header extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal(options) {
    this.props.toggleModal(options);
  }

  renderLinks() {
    return this.props.authenticated ? (
      [
        <li className="nav-item" key={'Profile'}>
          <Link to="/user-profile">Profile</Link>
        </li>,
        <li className="nav-item" key={'Signout'}>
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>,
      ]
    ) : (
      [
        <li className="nav-item" key={'Signin'}>
          <a
            href="#signin-modal"
            className="nav-link"
            onClick={() => this.openModal({
              modalTitle: 'Sign In',
              modalType: Signin,
              modalSize: 'small',
            })}
          >
            Sign In
          </a>
        </li>,
        <li className="nav-item" key={'Signup'}>
          <a
            href="#signin-modal"
            className="nav-link"
            onClick={() => this.openModal({
              modalTitle: 'Sign Up',
              modalType: Signup,
              modalSize: 'small',
            })}
          >
            Sign Up
          </a>
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
                  <li className="nav-item" key={'Search'} >
                    <Link to="/search">Search</Link>
                  </li>
                  {this.renderLinks()}
                  <li className="nav-item" key={'About'} >
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-item" key={'Contact'} >
                    <Link to="/contact">Contact</Link>
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

export default connect(mapStateToProps, actions)(Header);
