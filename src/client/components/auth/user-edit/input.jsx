import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Row } from 'react-bootstrap';

import * as actions from '../../../actions';

import validate from '../../form/validate';

const UserWizardPage = (props) => {
  const { content, formValues, handleSubmit, onSubmit, auxButton, auxButtonLabel, submitLabel } = props;
  const {
    contentName,
    contentLabel,
    contentType,
    contentAlt,
    contentOptions,
    component,
  } = formValues;
  return (
      <Form inline onSubmit={handleSubmit}>
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
        <FormGroup>
        <Button
          type="submit"
          className="next"
        >
          {submitLabel}
        </Button>
        {(auxButtonLabel) ? (
          <Button
            type="button"
            className="previous"
            onClick={auxButton}
          >
            {auxButtonLabel}
          </Button>
        ) : null}

      </FormGroup>
      </Form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPage);
