import React, { PropTypes } from 'react';

import './styles.css';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object,
};

const renderInput = ({ input, label, placeholder, type, options, meta: { touched, error, warning } }) => (
  <div>
    <label
      htmlFor={input}
    >
      {label}
    </label>
    <div>
      <select
        className="form-control"
        {...input}
        placeholder={placeholder}
        type={type}
      >
        <option />
        {options.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      {touched && (
        (error && <div className="form-error">{error}</div>) || (warning && <div className="form-warning">{warning}</div>)
      )}
    </div>
  </div>
);

renderInput.propTypes = propTypes;

export default renderInput;
