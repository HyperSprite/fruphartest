import React, { Component } from 'react';

import ScrollIntoView from '../containers/scroll-into-view';
import Header from './header';
import AppModal from './form/modal';

import '../styles/main.css';

export default class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="site" >
          <div className="site-main container" >
            {this.props.children}
          </div>
          <AppModal />
        </div>
      </div>
    );
  }
}
