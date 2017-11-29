import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { hashHistory, withRouter} from 'react-router';

import ReviewFormContainer from '../Forms/review_form_container';

class BookingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }

    this.onModalClose = this.onModalClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.id === 'review-button') {
      this.setState({
        modalOpen: true
      });
    } else {
      const listingId = this.props.bookingItem.listing_id;
      hashHistory.push(`listings/${listingId}`);
    }
  }

  render() {
    const bookingItem = this.props.bookingItem;
    let bookingDates = bookingItem.start_date + " - " + bookingItem.end_date;

    return (
      <li onClick={this.handleClick}>
        <div className="booking-item-div">
          <div className="booking-picture">
            <img className="booking-image" src={bookingItem.listing.picture}/>
          </div>
          <div className="booking-info">
            <div className="contents">
              <h1 className="address">{bookingItem.listing.address}</h1>
              <h1 className="city">{bookingItem.listing.city}</h1>
              <h1 className="host-name">{bookingItem.user.name}</h1>
              <h1>{bookingItem.user.email}</h1>
              <h1 className="booking-dates">{bookingDates}</h1>
            </div>
          </div>
          <Modal
            className="reviewModal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            >
            <ReviewFormContainer booking={bookingItem} closeModal={this.onModalClose}/>
          </Modal>
          <button id="review-button" onClick={this.handleClick}>Review</button>
        </div>
      </li>
    );
  }
}

BookingItem.proptypes = {
  bookingItem: PropTypes.object
}

export default withRouter(BookingItem);
