import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formValueSelector, reduxForm, reset } from 'redux-form';
import * as actions from '../../actions';

import formValues from './form-values';
import Alert from '../form/alert';
import validate from '../form/validate';
import Input from '../form/input';

import UserViewStatic from './user-view/static';
import UserViewPhone from './user-view/static-phonenumbers';
import UserViewAddress from './user-view/static-addresses';

import UserEditInput from './user-edit/input';
import UserEditArray from './user-edit/input-array';
import UserEditPageLast from './user-edit/page-last';

const relURL = '/auth/edituser';

const selector = formValueSelector('userdata');

const propTypes = {
  initialValues: PropTypes.object,
};

let UserEdit = class UserEdit extends Component {
  constructor() {
    super();
    this.setPage = this.setPage.bind(this);
    this.state = { page: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelFormEdit = this.cancelFormEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessage();
    this.props.fetchData('auth/user');
  }

  componentWillUnmount() {
    this.props.pageTransitionFalse();
  }

  handleFormSubmit(formProps) {
    this.props.postForm(formProps, `${relURL}`, 'AUTH_EDIT_USER');
    this.setState({ page: null });
  }

  cancelFormEdit() {
    this.props.dispatch(reset('userdata'));
    this.setState({ page: null });
  }


  setPage(pageNumber) {
    console.log('setPage')
    this.setState({ page: pageNumber });
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
      eventSelector,
      fields,
      handleSubmit,
      handleTransition,
      initialValues,
      onSubmit,
      postSuccess,
      pristine,
      reset,
      submitting,
      transitionPage,
    } = this.props;

    const {
      page,
    } = this.state;

    if (!authenticated) {
      return (
        <Redirect to="/signin" />
      );
    }

    return (
      <div>
        { page !== 1 && <UserViewStatic content={eventSelector.firstname} formValues={formValues.firstname} setPage={this.setPage} thisPage={1} />}
        { page === 1 && <UserEditInput content={eventSelector.firstname} formValues={formValues.firstname} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { page !==  2 && <UserViewStatic content={eventSelector.lastname} formValues={formValues.lastname} setPage={this.setPage} thisPage={2} />}
        { page === 2 && <UserEditInput content={eventSelector.lastname} formValues={formValues.lastname} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { page !==  3 && <UserViewStatic content={eventSelector.profile} formValues={formValues.profile} setPage={this.setPage} thisPage={3} />}
        { page === 3 && <UserEditInput content={eventSelector.profile} formValues={formValues.profile} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { page !==  4 && <UserViewStatic content={eventSelector.locationPref} formValues={formValues.locationPref} setPage={this.setPage} thisPage={4} />}
        { page === 4 && <UserEditInput content={eventSelector.locationPref} formValues={formValues.locationPref} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { page !==  5 && <UserViewPhone content={eventSelector.phoneNumbers} formValues={formValues.phoneNumbers} setPage={this.setPage} thisPage={5} />}
        { page === 5 && <UserEditArray content={eventSelector.phoneNumbers} formValues={formValues.phoneNumbers} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { page !==  6 && <UserViewAddress content={eventSelector.addresses} formValues={formValues.addresses} setPage={this.setPage} thisPage={6} />}
        { page === 6 && <UserEditArray content={eventSelector.addresses} formValues={formValues.addresses} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { page !==  7 && <UserViewStatic content={eventSelector.userName} formValues={formValues.userName} setPage={this.setPage} thisPage={7} />}
        { page === 7 && <UserEditInput content={eventSelector.userName} formValues={formValues.userName} auxButton={this.cancelFormEdit} auxButtonLabel="Cancel" onSubmit={handleSubmit(this.handleFormSubmit)} submitLabel='Save' />}
        { this.renderAlert() }
      </div>
    );
  }
};

function mapStateToProps(state) {
  const initialValues = state.auth.user;
  const transitionPage = false;
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message,
    transitionPage: state.page.transitionPage,
    initialValues,
    eventSelector: selector(state, 'firstname', 'lastname', 'profile', 'locationPref', 'phoneNumbers', 'addresses', 'userName'),
  };
}

UserEdit = reduxForm({
  form: 'userdata',
  enableReinitialize: true,
  validate,
})(UserEdit);

UserEdit.propTypes = propTypes;

export default connect(mapStateToProps, actions)(UserEdit);
