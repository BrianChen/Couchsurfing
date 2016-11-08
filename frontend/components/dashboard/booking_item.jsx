import React from 'react';

const BookingItem = ({bookingItem}) => {
  return (
      <li>
        <h1>{bookingItem.id}</h1>
        <h1>{bookingItem.user.name}</h1>
        <h1>{bookingItem.user.email}</h1>
        <h1>{bookingItem.user.city}</h1>
      </li>
  )
}

export default BookingItem;
