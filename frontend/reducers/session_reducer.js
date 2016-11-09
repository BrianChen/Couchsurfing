import {LOGIN, LOGOUT, SIGNUP, RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

let defaultState = {
  currentUser: null,
  errors: []
}

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return ({
        currentUser: null,
        errors: action.errors
      });
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

export default sessionReducer;
