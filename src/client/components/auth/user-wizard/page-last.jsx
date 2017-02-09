import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import Alert from '../../form/alert';
import Input from '../../form/input';
import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPageLast = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <Field
          component={Input}
          label="Public User Name:"
          name="userName"
          type="text"
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
          disabled={pristine || submitting}
        >
          Submit
        </button>
        {/* <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button> */}
        {/* <Link to="/home"> */}
          <button>
            Cancel
          </button>
        {/* </Link> */}
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPageLast);
