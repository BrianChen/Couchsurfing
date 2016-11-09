import merge from 'lodash/merge';
import UPDATE_FILTER from '../actions/filter_actions';

let defaultState = {
  startDate: "",
  endDate: ""
}

const FiltersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      const newState = {[action.filter]: action.value}
      return merge({}, state, newState);
    default:
      return state;
  }
}

export default FiltersReducer;
