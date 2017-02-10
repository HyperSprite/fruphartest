import React, { PropTypes } from 'react';

import './styles.css';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  shouldFocus: PropTypes.bool,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
};

const renderInput = ({ input, label, options, placeholder, shouldFocus, type, meta: { touched, error, warning } }) => (
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
        autoFocus={shouldFocus}
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
