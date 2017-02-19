import React from 'react';
import { FormGroup, ProgressBar } from 'react-bootstrap';

const loading = () => (
  <div className="loading">
    <ProgressBar active now={100} label="Loading" />
  </div>
);

export default loading;
