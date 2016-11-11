import { RETRIEVE_BOOKINGS, receiveBooking, receiveBookings, CREATE_BOOKING } from '../actions/booking_actions';
import { fetchBookings, createBooking } from '../util/booking_api_util';

export default ({getState, dispatch}) => next => action => {
  const bookingsSuccess = (data) =>  dispatch(receiveBookings(data));
  const bookingSuccess = (data) => dispatch(receiveBooking(data));
  const error = e => console.log(e.responseJSON);

  switch(action.type) {
    case RETRIEVE_BOOKINGS:
      fetchBookings(bookingsSuccess, error);
      return next(action);
    case CREATE_BOOKING:
      createBooking(action.booking, bookingSuccess, error);
      return next(action);
    default:
      return next(action);
  }
}
