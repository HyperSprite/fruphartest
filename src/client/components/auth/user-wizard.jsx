import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../actions';

import Addresses from '../form/addresses';
import Alert from '../form/alert';
import Input from '../form/input';
import PhoneNumbers from '../form/phone-numbers';
import validate from '../form/validate';

import UserWizardPage01 from './user-wizard/page-01';
import UserWizardPage02 from './user-wizard/page-02';
import UserWizardPage03 from './user-wizard/page-03';
import UserWizardPage04 from './user-wizard/page-04';
import UserWizardPage05 from './user-wizard/page-05';
import UserWizardPage06 from './user-wizard/page-06';
import UserWizardPageLast from './user-wizard/page-last';

const relURL = '/auth/edituser';

const propTypes = {
  initialValues: PropTypes.object,
};

let UserWizard = class UserWizard extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = { page: 1 };
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

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
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
      onSubmit,
      postSuccess,
      pristine,
      reset,
      submitting,
    } = this.props;

    const {
      page,
    } = this.state;

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
        { page === 1 && <UserWizardPage01 onSubmit={this.nextPage} />}
        { page === 2 && <UserWizardPage02 previousPage={this.previousPage} onSubmit={this.nextPage} />}
        { page === 3 && <UserWizardPage03 previousPage={this.previousPage} onSubmit={this.nextPage} />}
        { page === 4 && <UserWizardPage04 previousPage={this.previousPage} onSubmit={this.nextPage} />}
        { page === 5 && <UserWizardPage05 previousPage={this.previousPage} onSubmit={this.nextPage} />}
        { page === 6 && <UserWizardPage06 previousPage={this.previousPage} onSubmit={this.nextPage} />}
        { page === 7 && <UserWizardPageLast previousPage={this.previousPage} onSubmit={handleSubmit(this.handleFormSubmit)} />}
        { this.renderAlert() }
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

UserWizard = reduxForm({
  form: 'userdata',
  enableReinitialize: true,
  validate,
})(UserWizard);

UserWizard.propTypes = propTypes;

export default connect(mapStateToProps, actions)(UserWizard);
