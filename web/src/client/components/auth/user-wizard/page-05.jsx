import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <FieldArray
          name="phoneNumbers"
          component={PhoneNumbers}
          shouldFocus
        />
      </fieldset>
      {/* { renderAlert() } */}
      <div>
        <button
          type="button"
          className="previous"
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="submit"
          className="next"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
