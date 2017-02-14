import React, { PropTypes } from 'react';

import Static from '../../form/static';

const propTypes = {
  initialValues: PropTypes.object,
  setPage: PropTypes.func,
};

const userView = ({ content, formValues, setPage, thisPage }) => {
  const {
    contentLabel,
    contentType,
    contentAlt,
    contentOptions,
  } = formValues;

  const setPageFunc = thisPage ?
    () => setPage(thisPage) :
    null;

  return (
    <div onClick={setPageFunc} >
      <Static
        content={content}
        contentLabel={contentLabel}
        contentType={contentType}
        contentAlt={contentAlt}
        contentOptions={contentOptions}
      />
    </div>
  );
};

userView.propTypes = propTypes;

export default userView;
