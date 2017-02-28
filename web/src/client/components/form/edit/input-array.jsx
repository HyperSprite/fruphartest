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
    <Form id={contentName} onSubmit={handleSubmit}>
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
            bsStyle="primary"
            className="next"
            disabled={pristine || submitting}
          >
            {submitLabel}
          </Button>
          {(auxButtonLabel) ? (
            <Button
              type="button"
              bsStyle="info"
              className="previous"
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
  form: 'searchform',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
