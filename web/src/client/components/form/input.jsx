import React, { PropTypes } from 'react';

import './styles.css';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  shouldFocus: PropTypes.bool,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object,
};

const defaultProps = {
  placeholder: '',
  shouldFocus: false,
  meta: null,
};

const renderInput = ({
  input,
  label,
  placeholder,
  shouldFocus,
  type,
  meta: {
    touched,
    error,
    warning,
  },
}) => (
  <div>
    <label
      htmlFor={input}
    >
      {label}
    </label>
    <div>
      <input className="form-control" {...input} placeholder={placeholder} type={type} autoFocus={shouldFocus} />
      {touched && (
        (error && <div className="form-error">{error}</div>) || (warning && <div className="form-warning">{warning}</div>)
      )}
    </div>
  </div>
);

renderInput.propTypes = propTypes;
renderInput.defaultProps = defaultProps;

export default renderInput;
