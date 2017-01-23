import React from 'react';
import Modal from 'react-modal';
import ReviewModalStyle from '../Auth/review_modal_style';
import ReviewFormContainer from './review_form_container';

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

  handleClick() {
    this.setState({
      modalOpen: true
    });
  }

  render() {
    let booking_dates = this.props.bookingItem.start_date + " - " + this.props.bookingItem.end_date
    return (
      <li>
        <div className="booking-item-div">
          <div className="booking-picture">
            <img className="booking-image" src={this.props.bookingItem.listing.picture}/>
          </div>
          <div className="booking-info">
            <div className="contents">
              <h1 className="address">{this.props.bookingItem.listing.address}</h1>
              <h1 className="city">{this.props.bookingItem.listing.city}</h1>
              <h1 className="host-name">{this.props.bookingItem.user.name}</h1>
              <h1>{this.props.bookingItem.user.email}</h1>
              <h1 className="booking-dates">{booking_dates}</h1>
            </div>
          </div>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ReviewModalStyle}
            >
            <ReviewFormContainer booking={this.props.bookingItem} closeModal={this.onModalClose}/>
          </Modal>
          <button id="review-button" onClick={this.handleClick}>Review</button>
        </div>
      </li>
    )
  }
}

export default BookingItem;
