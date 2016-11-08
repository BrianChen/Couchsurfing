export const fetchBookings = (success, error) => {
  $.ajax({
    url: '/api/bookings',
    type: 'GET',
    success,
    error
  });
}
