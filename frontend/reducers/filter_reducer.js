import merge from 'lodash/merge';
import { UPDATE_FILTER, UPDATE_BOUNDS } from '../actions/filter_actions';

let defaultState = {
  bounds: {},
  dates: {start_date: "", end_date: ""}
}

const FiltersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case UPDATE_FILTER:
      newState = {[action.filter]: action.value}
      return merge({}, state, newState);
    case UPDATE_BOUNDS:
      newState = merge({}, state);
      newState.bounds = action.bounds;
      return newState;
    default:
      return state;
  }
}

export default FiltersReducer;
