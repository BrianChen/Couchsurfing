export const RETRIEVE_BOOKINGS = 'RETRIEVE_BOOKINGS';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const CREATE_BOOKING = 'CREATE_BOOKING';

export const retrieveBookings = () => ({
  type: RETRIEVE_BOOKINGS
});

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
})

export const createBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking
})
