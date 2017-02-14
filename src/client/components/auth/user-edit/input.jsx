import React from 'react';
import { Field, reduxForm } from 'redux-form';
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
    <form onSubmit={handleSubmit}>
      {(auxButtonLabel) ? (
        <button
          type="button"
          className="previous"
          onClick={auxButton}
        >
          {auxButtonLabel}
        </button>
      ) : null}
      <fieldset className="form-group">
        <Field
          component={component}
          label={contentLabel}
          name={contentName}
          type={contentType}
          checked={content}
          shouldFocus
        />
      </fieldset>
      <div>
        <button
          type="submit"
          className="next"
        >
          {submitLabel}
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
