import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup, Form, FormGroup } from 'react-bootstrap';

import * as actions from '../../../actions';

import validate from '../../form/validate';

const WizardInput = (props) => {
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
    <div className="form-container">
      <Form id={contentName}  onSubmit={handleSubmit}>
        <FormGroup className="inline-next form-left">
          <Field
            component={component}
            label={contentLabel}
            name={contentName}
            type={contentType}
            checked={content}
            shouldFocus
          />
        </FormGroup>
        <ButtonGroup className="edit-in-place form-right">
          <Button
            type="submit"
            bsStyle="primary"
            bsSize="large"
            className="next"
            disabled={pristine || submitting}
          >
            {submitLabel}
          </Button>
          {(auxButtonLabel) ? (
            <Button
              type="button"
              bsStyle="info"
              bsSize="large"
              className="previous"
              onClick={auxButton}
            >
              {auxButtonLabel}
            </Button>
            ) : null}
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'searchform',
  destroyOnUnmount: false,
  validate,
})(WizardInput);
