import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formValueSelector, reduxForm } from 'redux-form';
import * as actions from '../../actions';

import formValues from './form-values';
import Alert from '../form/alert';
import validate from '../form/validate';
import UserViewStatic from './user-view/static';
import UserViewPhone from './user-view/static-phonenumbers';
import UserViewAddresses from './user-view/static-addresses';
import UserEditInput from './user-edit/input';
import UserEditArray from './user-edit/input-array';
import UserEditPageLast from './user-edit/page-last';
import ScrollIntoView from '../../containers/scroll-into-view';
import PageFieldHash from '../../containers/page-field-hash';

const HOCUserEditInput = PageFieldHash(UserEditInput);
const HOCUserEditArray = PageFieldHash(UserEditArray);

const relURL = '/auth/edituser';

const selector = formValueSelector('userdata');

const propTypes = {
  initialValues: PropTypes.object,
};

let UserWizard = class UserWizard extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelFormEdit = this.cancelFormEdit.bind(this);
    this.state = {
      page: 1,
      headerHeight: window.innerHeight / 2,
    };
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
  }

  cancelFormEdit() {
    () => <Redirect to="/home" />;
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
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
      headerHeight,
    } = this.state;

    if (!authenticated) {
      return (
        <Redirect to="/signin" />
      );
    }

    if (transitionPage) {
      return (
        <Redirect to="/home" />
      );
    }

    return (
      <div className="main-flex-container no-scroll-form-feed">
        <ScrollIntoView
          id=""
          headerHeight={35}
        />
        <div className="main-sidebar" />
        <div className="main">
          <h1>Let's get some more informatoin...</h1>
          { page > 1 && <UserViewStatic content={eventSelector.firstname} formValues={formValues.firstname} />}
          { page > 2 && <UserViewStatic content={eventSelector.lastname} formValues={formValues.lastname} />}
          { page > 3 && <UserViewStatic content={eventSelector.profile} formValues={formValues.profile} />}
          { page > 4 && <UserViewStatic content={eventSelector.locationPref} formValues={formValues.locationPref} />}
          { page > 5 && <UserViewPhone content={eventSelector.phoneNumbers} formValues={formValues.phoneNumbers} />}
          { page > 6 && <UserViewAddresses content={eventSelector.addresses} formValues={formValues.addresses} />}
          { page > 7 && <UserViewStatic content={eventSelector.userName} formValues={formValues.userName} />}
          { page === 1 && <HOCUserEditInput content={eventSelector.firstname} formValues={formValues.firstname} onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 2 && <HOCUserEditInput content={eventSelector.lastname} formValues={formValues.lastname} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 3 && <HOCUserEditInput content={eventSelector.profile} formValues={formValues.profile} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 4 && <HOCUserEditInput content={eventSelector.locationPref} formValues={formValues.locationPref} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 5 && <HOCUserEditArray content={eventSelector.phoneNumbers} shouldFocus formValues={formValues.phoneNumbers} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 6 && <HOCUserEditArray content={eventSelector.addresses} shouldFocus formValues={formValues.addresses} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 7 && <HOCUserEditInput content={eventSelector.userName} formValues={formValues.userName} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 8 && <UserEditPageLast formValues={{ contentName: 'lastpage' }} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={handleSubmit(this.handleFormSubmit)} />}
          { this.renderAlert() }
        </div>
        <div className="main-sidebar" />
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

UserWizard = reduxForm({
  form: 'userdata',
  enableReinitialize: true,
  validate,
})(UserWizard);

UserWizard.propTypes = propTypes;

export default connect(mapStateToProps, actions)(UserWizard);
