import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';

import * as actions from '../../../actions';

import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { formValues, handleSubmit, auxButton, auxButtonLabel, pristine, shouldFocus, submitting, submitLabel } = props
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
          shouldFocus={shouldFocus}
        />
      </FormGroup>
      <FormGroup>
        <ButtonGroup className="edit-in-place">
          <Button
            type="submit"
            className="next btn-primary"
            disabled={pristine || submitting}
          >
            {submitLabel}
          </Button>
          {(auxButtonLabel) ? (
            <Button
              type="button"
              className="previous btn-secondary"
              onClick={auxButton}
            >
              {auxButtonLabel}
            </Button>
            ) : null}
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
