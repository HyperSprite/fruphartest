import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import Alert from '../../form/alert';
import Input from '../../form/input';
import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="form-group">
        <Field
          component={Input}
          label="First Name:"
          name="firstname"
          type="text"
        />
      </fieldset>
      {/* { renderAlert() } */}
      <div>
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
