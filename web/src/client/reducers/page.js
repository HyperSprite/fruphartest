// @flow

import { TYPES } from '../actions';

export default function (state = { transitionPage: false }, action) {
  switch (action.type) {
    case TYPES.AUTH_EDIT_USER:
    case TYPES.PAGE_TRANSITION_TRUE:
      return { ...state, transitionPage: true };
    case TYPES.PAGE_TRANSITION_FALSE:
      return { ...state, transitionPage: false };
    default:
      return state;
  }
}
