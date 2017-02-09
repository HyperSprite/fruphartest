import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../actions';

import Alert from '../form/alert';
import Input from '../form/input';
import PhoneNumbers from '../form/phone-numbers';
import Addresses from '../form/addresses';

const relURL = '/auth/edituser';

const propTypes = {
  initialValues: PropTypes.object,
};

let UserData = class UserData extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelFormEdit = this.cancelFormEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessage();
    this.props.fetchData('auth/user');
  }

  handleFormSubmit(formProps) {
    this.props.postForm(formProps, `${relURL}`, 'AUTH_EDIT_USER');
  }

  cancelFormEdit() {
    // this.props.cancelEdit();
    () => <Redirect to="/home" />;
  }

  renderAlert() {
    const { errorMessage } = this.props;
    return (errorMessage) ? (
      Object.keys(errorMessage).map(key => errorMessage[key]).map((eM) => {
        return Alert(eM.path, 'Opps', eM.message);
      })
    ) : (
      null
    );
  }

  render() {
    const {
      authenticated,
      handleSubmit,
      initialValues,
      postSuccess,
      pristine,
      reset,
      submitting,
    } = this.props;

    if (!authenticated) {
      return (
        <Redirect to="/signin" />
      );
    }

    if (postSuccess) {
      return (
        <Redirect to="/home" />
      );
    }

    return (
      <div>
        <h1>User Profile</h1>
        <h2>{ this.props.message }</h2>
        <p>{ this.props.email }</p>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset className="form-group">
            <Field
              component={Input}
              label="User Name:"
              name="userName"
              type="text"
            />
          </fieldset>
          <fieldset className="form-group">
            <Field
              component={Input}
              label="First Name:"
              name="firstname"
              type="text"
            />
          </fieldset>
          <fieldset className="form-group">
            <Field
              component={Input}
              label="Last Name:"
              name="lastname"
              type="text"
            />
          </fieldset>
          <fieldset className="form-group">
            <Field
              component={Input}
              label="Profile Image:"
              name="profile"
              type="url"
            />
          </fieldset>
          <fieldset className="form-group">
            <Field
              component={Input}
              label="Set Location Preference:"
              name="locationPref"
              type="text"
            />
          </fieldset>
          <fieldset className="form-group">
            <FieldArray
              name="addresses"
              component={Addresses}
            />
          </fieldset>
          <fieldset className="form-group">
            <FieldArray
              name="phoneNumbers"
              component={PhoneNumbers}
            />
          </fieldset>
          { this.renderAlert() }
          <div>
            <button
              type="submit"
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </button>
            <Link to="/home">
              <button>
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const initialValues = state.auth.user;
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message,
    initialValues,
  };
}

UserData = reduxForm({
  form: 'userdata',
  enableReinitialize: true,
  // validate,
})(UserData);

UserData.propTypes = propTypes;

export default connect(mapStateToProps, actions)(UserData);
