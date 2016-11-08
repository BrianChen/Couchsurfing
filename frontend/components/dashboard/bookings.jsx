import React from 'react';
import BookingItem from './booking_item';

class Bookings extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let bookingEls = this.props.bookings.map((bookingItem) => (
      <BookingItem key={bookingItem.id} bookingItem={bookingItem} />
    ));
    let bookingTitle = this.props.isTravelPlans ? "MY TRAVEL PLANS" : "MY UPCOMING GUESTS";

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
    )
  }
}
export default Bookings;
