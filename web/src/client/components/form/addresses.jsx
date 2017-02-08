import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import Input from './input';
import Select from './select';

const propTypes = {
  fields: PropTypes.object,
};

const enumAddress = [
  'Home',
  'Office',
  'Other',
];


const renderAddresses = ({ fields }) => (
  <ul>
    {fields.map((aD, index) =>
      <li
        key={`${index}${aD.locStreet}`}
      >
        <div>
          <Field
            name={`${aD}.locType`}
            type="text"
            component={Select}
            label="Type"
            options={enumAddress}
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
          <div>
            <button
              type="button"
              onClick={() => fields.remove(index)}
            >
            delete
            </button>
          </div>

        </div>
      </li>,
    )}
    <li>
      <button
        type="button"
        onClick={() => fields.push()}
      >
        Add Address
      </button>
    </li>
  </ul>
);

renderAddresses.propTypes = propTypes;

export default renderAddresses;
