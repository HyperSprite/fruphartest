import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';

import * as actions from '../../../actions';

import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { content, formValues, handleSubmit, onSubmit, auxButton, auxButtonLabel, pristine, submitting, submitLabel } = props;
  const {
    contentName,
    contentLabel,
    contentType,
    contentAlt,
    contentOptions,
    component,
  } = formValues;

  return (
    <Form id={contentName} inline onSubmit={handleSubmit}>
      <FormGroup className="inline-next">
        <Field
          component={component}
          label={contentLabel}
          name={contentName}
          type={contentType}
          checked={content}
          shouldFocus
        />
      </FormGroup>
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
    </Form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
