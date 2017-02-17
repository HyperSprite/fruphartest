import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import { Button, Form, FormGroup } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FieldArray
          name={contentName}
          component={component}
          shouldFocus
        />
      </FormGroup>
      <FormGroup>
        {(auxButtonLabel) ? (
          <Button
            type="button"
            className="previous"
            onClick={auxButton}
          >
            {auxButtonLabel}
          </Button>
        ) : null}
        <Button
          type="submit"
          className="next"
        >
          {submitLabel}
        </Button>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
