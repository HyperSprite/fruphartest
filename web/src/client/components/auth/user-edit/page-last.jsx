import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import Alert from '../../form/alert';
import Input from '../../form/input';
import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPageLast = (props) => {
  const { handleSubmit, pristine, previousPage, submitting,  auxButton, auxButtonLabel, submitLabel } = props
  return (
    <form onSubmit={handleSubmit}>
      {/* { renderAlert() } */}
      <div>
        {(auxButtonLabel) ? (
          <button
            type="button"
            className="previous"
            onClick={auxButton}
          >
            {auxButtonLabel}
          </button>
        ) : null}
        <button
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
          <button>
            Cancel
          </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPageLast);
