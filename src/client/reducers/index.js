// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import page from './page';
import todos from './todos';
import visibilityFilter from './visibility-filter';

const app = combineReducers({
  auth,
  form,
  page,
  todos,
  visibilityFilter,
});

export default app;
