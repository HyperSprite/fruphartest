import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formValueSelector, reduxForm } from 'redux-form';
import * as actions from '../../actions';

import formValues from './form-values';
import Alert from '../form/alert';
import validate from '../form/validate';
import ViewStatic from '../form/view/static';
import EditInput from '../form/edit/input';
import EditArray from '../form/edit/input-array';
import EditPageLast from '../form/edit/page-last';

const relURL = '/apiv1/search';

const selector = formValueSelector('searchform');

const propTypes = {
  initialValues: PropTypes.object,
};

let SearchWizard = class SearchWizard extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.cancelFormEdit = this.cancelFormEdit.bind(this);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    this.props.fetchData('apiv1/search');
  }

  componentWillUnmount() {
    this.props.pageTransitionFalse();
  }

  handleFormSubmit(formProps) {
    this.props.postForm(formProps, `${relURL}`, 'FETCH_SEARCH');
  }

  cancelFormEdit() {
    () => <Redirect to="/" />;
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
    } = this.state;

    // un-comment to force authenticated for this page
    // if (!authenticated) {
    //   return (
    //     <Redirect to="/signin" />
    //   );
    // }

    if (transitionPage) {
      return (
        <Redirect to="/search-results" />
      );
    }

    return (
      <div className="main-flex-container" >
        <div className="main-sidebar" />
        <div className="main form-main">
          <h1>Search</h1>
          { page > 1 && <ViewStatic content={eventSelector.drugName} formValues={formValues.drugName} />}
          { page > 2 && <ViewStatic content={eventSelector.drugDosage} formValues={formValues.drugDosage} />}
          { page > 3 && <ViewStatic content={eventSelector.drugForm} formValues={formValues.drugForm} />}
          { page > 4 && <ViewStatic content={eventSelector.drugQuantity} formValues={formValues.drugQuantity} />}
          { page > 5 && <ViewStatic content={eventSelector.drugUseGeneric} formValues={formValues.drugUseGeneric} />}
          { page > 6 && <ViewStatic content={eventSelector.drugUseBranded} formValues={formValues.drugUseBranded} />}
          { page === 1 && <EditInput content={eventSelector.drugName} formValues={formValues.drugName} onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 2 && <EditInput content={eventSelector.drugDosage} formValues={formValues.drugDosage} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 3 && <EditInput content={eventSelector.drugForm} formValues={formValues.drugForm} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 4 && <EditInput content={eventSelector.drugQuantity} formValues={formValues.drugQuantity} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 5 && <EditInput content={eventSelector.drugUseGeneric} shouldFocus formValues={formValues.drugUseGeneric} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 6 && <EditInput content={eventSelector.drugUseBranded} shouldFocus formValues={formValues.drugUseBranded} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={this.nextPage} submitLabel="Next" />}
          { page === 7 && <EditPageLast formValues={{ contentName: 'lastpage' }} auxButton={this.previousPage} auxButtonLabel="Back" onSubmit={handleSubmit(this.handleFormSubmit)} />}
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
    eventSelector: selector(state, 'drugName', 'drugDosage', 'drugForm', 'drugQuantity', 'drugUseGeneric', 'drugUseBranded'),
  };
}

SearchWizard = reduxForm({
  form: 'searchform',
  enableReinitialize: true,
  validate,
})(SearchWizard);

SearchWizard.propTypes = propTypes;

export default connect(mapStateToProps, actions)(SearchWizard);
