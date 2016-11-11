export const fetchBookings = (success, error) => {
  $.ajax({
    url: '/api/bookings',
    type: 'GET',
    success,
    error
  });
}

export const createBooking = (booking, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/bookings',
    data: {booking},
    success,
    error
  })
}
