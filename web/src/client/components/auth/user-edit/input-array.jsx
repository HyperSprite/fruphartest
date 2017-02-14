import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { formValues, handleSubmit, auxButton, auxButtonLabel, submitLabel } = props
  const {
    contentName,
    contentLabel,
    contentType,
    contentAlt,
    contentOptions,
    component,
  } = formValues;
  return (
    <form onSubmit={handleSubmit}>
      {(auxButtonLabel) ? (
        <button
          type="button"
          className="previous"
          onClick={auxButton}
        >
          {auxButtonLabel}
        </button>
      ) : null}
      <fieldset className="form-group">
        <FieldArray
          name={contentName}
          component={component}
          shouldFocus
        />
      </fieldset>
      <button
        type="submit"
        className="next"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
