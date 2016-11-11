import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions';
import merge from 'lodash/merge';

let defaultState = {bookings: [], guests: []}

const bookingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      newState = {bookings: action.bookings.bookings, guests: action.bookings.guests};
      return newState;
    case RECEIVE_BOOKING:
      newState = merge({}, state);
      newState.bookings.push(action.booking);
      return newState;
    default:
      return state;
  }
}

export default bookingReducer;
