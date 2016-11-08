import { RETRIEVE_BOOKINGS, receiveBookings } from '../actions/booking_actions';
import { fetchBookings } from '../util/booking_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = (data) =>  dispatch(receiveBookings(data))
  const error = e => console.log(e.responseJSON);

  switch(action.type) {
    case RETRIEVE_BOOKINGS:
      fetchBookings(success, error);
    default:
      return next(action);
  }
}
