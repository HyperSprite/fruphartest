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

const enumAddress = [
  'Home',
  'Office',
  'Other',
];

const renderAddresses = ({ fields, shouldFocus }) => (
  <ul>
    {fields.map((aD, index) =>
      <li
        key={aD.locStreet}
      >
        <div className="form-box">
          <Field
            name={`${aD}.locType`}
            type="text"
            component={Select}
            label="Type"
            options={enumAddress}
            shouldFocus
          />
          <Field
            name={`${aD}.locStreet`}
            type="text"
            component={Input}
            label="Street Address"
          />
          <Field
            name={`${aD}.locStreet2`}
            type="text"
            component={Input}
            label="Street Address, additional"
          />
          <Field
            name={`${aD}.locCity`}
            type="text"
            component={Input}
            label="City"
          />
          <Field
            name={`${aD}.locState`}
            type="text"
            component={Input}
            label="State"
          />
          <Field
            name={`${aD}.locCountry`}
            type="text"
            component={Input}
            label="Country"
          />
          <Field
            name={`${aD}.locZip`}
            type="text"
            component={Input}
            label="ZIP code"
          />
          <Button
            type="button"
            bsStyle="danger"
            onClick={() => fields.remove(index)}
          >
          delete
          </Button>
        </div>
      </li>,
    )}
    <li>
      <Button
        type="button"
        onClick={() => fields.push()}
        autoFocus={shouldFocus}
      >
        Add Address
      </Button>
    </li>
  </ul>
);

renderAddresses.propTypes = propTypes;
renderAddresses.defaultProps = defaultProps;

export default renderAddresses;
