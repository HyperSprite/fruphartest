import React, { PropTypes } from 'react';
import { ControlLabel } from 'react-bootstrap';

import StaticAddress from '../../form/static-address';

const propTypes = {
  content: PropTypes.array,
  setPage: PropTypes.func,
  thisPage: PropTypes.number,
};

const staticAddresses = ({ content = [], setPage, thisPage }) => {

  const setPageFunc = thisPage ?
    () => setPage(thisPage) :
    null;

  return (
    <div onClick={setPageFunc} >
      <ControlLabel className="inline-this">Addresses</ControlLabel>
      <ul>
        {content.map(ad => (
          <li key={ad.locStreet} >
            <StaticAddress
              locType={ad.locType}
              locStreet={ad.locStreet}
              locStreet2={ad.locStreet2}
              locCity={ad.locCity}
              locState={ad.locState}
              locCountry={ad.locCountry}
              locZip={ad.locZip}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

staticAddresses.propTypes = propTypes;

export default staticAddresses;
