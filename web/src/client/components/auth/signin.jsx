import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';

import { signinUser, ifToken } from '../../actions';
import validate from './../form/validate';
import Input from './../form/input';
import Alert from './../form/alert';

const propTypes = {
  handleSubmit: PropTypes.func,
  signinUser: PropTypes.func,
  onClickifToken: PropTypes.func,
  ifToken: PropTypes.func,
};

let Signin = class Signin extends Component {
  constructor(props) {
    super(props);
    this.popout = this.popout.bind(this);
    this.popoutClosed = this.popoutClosed.bind(this);
    this.state = { isPoppedOut: false };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.popoutContentClicked = this.popoutContentClicked.bind(this);
  }

  popout() {
    this.setState({isPoppedOut: true});
  }

  popoutClosed() {
    this.setState({isPoppedOut: false});
  }

  handleFormSubmit(formProps) {
    this.props.signinUser(formProps);
  }

  popoutContentClicked() {
    this.props.ifToken();
    this.popoutClosed();
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        Alert('Opps', this.props.errorMessage)
      );
    }
  }

  render() {
    const { handleSubmit, onClickifToken, authenticated, pristine, reset, submitting } = this.props;

    if (authenticated) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div>
        <Form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <FormGroup>
            <Field
              component={Input}
              label="Email:"
              name="email"
              type="email"
              placeholder="Type your email"
            />
          </FormGroup>
          <FormGroup>
            <Field
              component={Input}
              label="Password:"
              name="password"
              type="password"
              placeholder="Type a password"
            />
          </FormGroup>
          { this.renderAlert() }
          <Button type="submit" className="btn-primary" disabled={pristine || submitting}>Submit</Button>
          <Button type="button" className="btn-secondary" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
          <span>
            {' or '}
            <Link to="/signup">
              {'Sign up!'}
            </Link>
          </span>
        </Form>
      </div>
    );
  }
};

Signin.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
  };
}

Signin = reduxForm({
  form: 'signin',
  validate,
})(Signin);

export default Signin = connect(mapStateToProps, { signinUser, ifToken })(Signin);
