import React, { PropTypes } from 'react';

const propTypes = {
  phoneNumber: PropTypes.string,
  phoneType: PropTypes.string,
};

const renderStatic = ({ phoneNumber, phoneType  }) => {
  if (phoneType && phoneNumber) {
    return (
      <div
        className="static"
      >
        <label
          htmlFor={phoneNumber}
          className="static-label"
        >
          {phoneType}
        </label>{' '}
        {phoneNumber}
      </div>
    );
  }
  return null;
};

renderStatic.propTypes = propTypes;

export default renderStatic;
