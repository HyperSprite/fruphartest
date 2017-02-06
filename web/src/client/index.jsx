// @flow
//
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './router';
import store from './store';

import App from './components/app';


render(
  <Provider store={store}>
    <Router>
      <App >{ routes }</App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
