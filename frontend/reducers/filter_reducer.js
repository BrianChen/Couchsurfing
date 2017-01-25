import merge from 'lodash/merge';
import { UPDATE_FILTER } from '../actions/filter_actions';

let defaultState = {
  bounds: {center: {lat: 40.7127837, lng: -74.00594130000002}, northEast: {}, southWest: {}},
  dates: {start_date: "", end_date: ""}
}

const FiltersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case UPDATE_FILTER:
      newState = {[action.filter]: action.value}
      return merge({}, state, newState);
    default:
      return state;
  }
}

export default FiltersReducer;
