import React from 'react';
import PropTypes from 'prop-types';

import BookingItem from './booking_item';

const Bookings = ({bookings, isTravelPlans}) => {
  let bookingEls = bookings.map((bookingItem) => (
    <BookingItem key={bookingItem.id} bookingItem={bookingItem} />
  ));
  let bookingTitle = isTravelPlans ? "MY TRAVEL PLANS" : "MY UPCOMING GUESTS";

  return (
    <div className="travel-plans">
      <header className="travel-plans-header">
        <h1>{bookingTitle}</h1>
      </header>
      <div className="travel-plans-content">
        <ul>
          {bookingEls}
        </ul>
      </div>
    </div>
  );
}

Bookings.proptypes = {
  bookings: PropTypes.array,
  isTravelPlans: PropTypes.string,
}

export default Bookings;
