import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import Alert from '../../form/alert';
import Input from '../../form/input';
import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { handleSubmit, auxButton, auxButtonLabel, submitLabel } = props
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
          name="addresses"
          component={Addresses}
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
