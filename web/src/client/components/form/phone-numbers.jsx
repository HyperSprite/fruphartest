import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { Button } from 'react-bootstrap';

import Input from './input';
import Select from './select';

const propTypes = {
  fields: PropTypes.object,
  shouldFocus: PropTypes.bool,
};

const defaultProps = {
  shouldFocus: false,
};

const enumPhones = [
  'Direct',
  'Main',
  'Mobile',
  'Work',
  'Home',
  'Other',
];

const renderPhoneNumbers = ({ fields, shouldFocus }) => (
  <ul>
    {fields.map((pN, index) =>
      <li
        key={`${pN}.phoneNumber`}
      >
        <div className="form-box">
          <Field
            name={`${pN}.phoneType`}
            type="text"
            component={Select}
            label="Type"
            options={enumPhones}
            shouldFocus
          />
          <Field
            name={`${pN}.phoneNumber`}
            type="text"
            component={Input}
            label="Phone Number"
          />
          <div>
            <Button
              type="button"
              bsStyle="danger"
              onClick={() => fields.remove(index)}
            >
            delete
            </Button>
          </div>

        </div>
      </li>,
    )}
    <li>
      <Button
        type="button"
        onClick={() => fields.push()}
        autoFocus={shouldFocus}
      >
        Add Phone Number
      </Button>
    </li>
  </ul>
);

renderPhoneNumbers.propTypes = propTypes;
renderPhoneNumbers.defaultProps = defaultProps;

export default renderPhoneNumbers;
