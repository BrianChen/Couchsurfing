import { UPDATE_LOCATION } from '../actions/location_actions';

const defaultState = {lat: 37.773972, lng: -122.431297};

const locationReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_LOCATION:
      return action.location;
    default:
      return state;
  }
}

export default locationReducer;
