import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import Input from '../../form/input';
import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <Field
          component={Input}
          label="Last Name:"
          name="lastname"
          type="text"
          shouldFocus
        />
      </fieldset>
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
