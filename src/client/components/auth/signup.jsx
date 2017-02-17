import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions';
import validate from './../form/validate';
import Input from './../form/input';
import Alert from './../form/alert';

const propTypes = {
  authenticated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  onRequestHide: PropTypes.func,
  signinUser: PropTypes.func,
  onClickifToken: PropTypes.func,
  ifToken: PropTypes.func,
};


let Signup = class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
  }

  componentDidUpdate() {
    if (this.props.modal && this.props.authenticated ) {
      this.handleSubmitSuccess();
    }
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        Alert('Opps', this.props.errorMessage)
      );
    }
  }

  handleSubmitSuccess() {
    if (this.props.authenticated) {
      this.props.onRequestHide();
    }
  }

  render() {
    const { handleSubmit, authenticated, pristine, reset, submitting } = this.props;

    if (authenticated) {
      return (
        <Redirect to="/user-wizard" />
      );
    }
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <Field
            component={Input}
            label="Email:"
            name="email"
            type="email"
            placeholder="Type your email"
            shouldFocus
          />
        </fieldset>
        <fieldset className="form-group">
          <Field
            component={Input}
            label="Password:"
            name="password"
            type="password"
            placeholder="Choose a password"
          />
        </fieldset>
        <fieldset className="form-group">
          <Field
            component={Input}
            label="Confirm Password:"
            name="passwordConfirm"
            type="password"
            placeholder="Retype your password"
          />
        </fieldset>
        { this.renderAlert() }
        <div>
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
};

Signup.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
  };
}

Signup = reduxForm({
  form: 'signup',
  validate,
})(Signup);


export default connect(mapStateToProps, actions)(Signup);
