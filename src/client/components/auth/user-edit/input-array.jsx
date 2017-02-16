import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

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
        <Button
          type="button"
          className="previous"
          onClick={auxButton}
        >
          {auxButtonLabel}
        </Button>
      ) : null}
      <fieldset className="form-group">
        <FieldArray
          name={contentName}
          component={component}
          shouldFocus
        />
      </fieldset>
      <Button
        type="submit"
        className="next"
      >
        {submitLabel}
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
