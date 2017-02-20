import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'react-bootstrap';

import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import Alert from '../../form/alert';
import Input from '../../form/input';
import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { handleSubmit, auxButton, auxButtonLabel, submitLabel } = props
  return (
    <Form inline onSubmit={handleSubmit}>
      {(auxButtonLabel) ? (
        <Button
          type="button"
          className="previous edit-in-place"
          onClick={auxButton}
        >
          {auxButtonLabel}
        </Button>
      ) : null}
      <FormGroup controlId="formInlineName">
        <FieldArray
          name="addresses"
          component={Addresses}
          shouldFocus
        />
      </FormGroup>
      <Button
        type="submit"
        className="next edit-in-place"
      >
        {submitLabel}
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
