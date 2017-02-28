import React, { PropTypes } from 'react';

import Static from '../static';

const propTypes = {
  initialValues: PropTypes.object,
  setPage: PropTypes.func,
};

const userView = ({ content, formValues, setPage, thisPage }) => {
  const {
    contentLabel,
    contentName,
    contentType,
    contentAlt,
    contentOptions,
  } = formValues;

  const setPageFunc = thisPage ?
    () => setPage(thisPage) :
    null;

  return (
    <div onClick={setPageFunc} className="inline-next static" >
      <Static
        content={content}
        contentLabel={contentLabel}
        contentName={contentName}
        contentType={contentType}
        contentAlt={contentAlt}
        contentOptions={contentOptions}
      />
    </div>
  );
};

userView.propTypes = propTypes;

export default userView;
