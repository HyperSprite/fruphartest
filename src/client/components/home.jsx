import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import ScrollIntoView from './../containers/scroll-into-view';
import SignModal from './auth/sign-modal';

class Home extends Component {
  componentDidMount() {
    // this.props.setPageName('');
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <SignModal />
      </div>
    );
  }
}

export default connect(null, actions)(Home);
