import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';
import ScrollIntoView from './../containers/scroll-into-view';

class Home extends Component {
  componentDidMount() {
    // this.props.setPageName('');
  }

  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
