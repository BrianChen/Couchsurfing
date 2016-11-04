import {LOGIN, LOGOUT, SIGNUP, RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return ({
        currentUser: null,
        errors: action.errors
      });
    case LOGOUT:
      return {};
    default:
      return oldState;
  }
}

export default sessionReducer;
