export const RETRIEVE_BOOKINGS = 'RETRIEVE_BOOKINGS';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

export const retrieveBookings = () => ({
  type: RETRIEVE_BOOKINGS
});

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});
