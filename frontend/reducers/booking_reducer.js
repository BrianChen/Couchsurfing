import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
import merge from 'lodash/merge';

let defaultState = {bookings: [], guests: []}

const bookingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      let newState = {bookings: action.bookings.bookings, guests: action.bookings.guests};
      return newState;
    default:
      return state;
  }
}

export default bookingReducer;
