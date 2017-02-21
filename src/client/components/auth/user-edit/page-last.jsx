import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

import * as actions from '../../../actions';

import Addresses from '../../form/addresses';
import Alert from '../../form/alert';
import Input from '../../form/input';
import PhoneNumbers from '../../form/phone-numbers';
import validate from '../../form/validate';

const UserWizardPageLast = (props) => {
  const { contentName, handleSubmit, pristine, previousPage, submitting,  auxButton, auxButtonLabel, submitLabel } = props
  return (
    <form id={contentName} onSubmit={handleSubmit}>
      {/* { renderAlert() } */}
      <div>
        {(auxButtonLabel) ? (
          <Button
            type="button"
            className="previous edit-in-place"
            onClick={auxButton}
          >
            {auxButtonLabel}
          </Button>
        ) : null}
        <Button
          type="submit"
          className="edit-in-place"
          disabled={pristine || submitting}
        >
          Submit
        </Button>
          <Button>
            Cancel
          </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userdata',
  destroyOnUnmount: false,
  validate,
})(UserWizardPageLast);
