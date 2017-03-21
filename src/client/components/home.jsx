import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';

import * as actions from './../actions';
import ScrollIntoView from './../containers/scroll-into-view';

class Home extends Component {
  componentDidMount() {
    // this.props.setPageName('');
  }

  render() {
    return (
      <div className="main-flex-container">
        <ScrollIntoView
          id=""
          alignToTop
          headerHeight={60}
        />
        <div className="main-sidebar" />
        <div className="main">
          <Jumbotron className="jumbo-home">
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <Row className="show-grid">
              <Col xs={6} md={5}><Link className="btn btn-lg btn-primary btn-block" to="/search">Search a drug</Link></Col>
              <Col xsHidden md={2} className="space" />
              <Col xs={6} md={5}><Link className="btn btn-lg btn-primary btn-block" to="/about">Learn more</Link></Col>
            </Row>
          </Jumbotron>
        </div>
        <div className="main-sidebar" />
      </div>
    );
  }
}

export default connect(null, actions)(Home);
