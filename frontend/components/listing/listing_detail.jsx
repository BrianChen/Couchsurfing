import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

import BookingFormContainer from '../Forms/booking_form_container';
import ListingReview from './listing_review';

class ListingDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.reviewList = this.reviewList.bind(this);
  }

  handleClick() {
    this.setState({
      modalOpen: true
    })
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  reviewList(reviews = []) {
    return (
      <div>
        {reviews.map(review => (
          <ListingReview rating={review.rating} comment={review.comment} key={review.id} />
        ))}
      </div>
    )
  }

  render() {
    let reviewEls = this.reviewList(this.props.listing.reviews);
    return (
      <div className="listing-detail">
        <img className="listing-detail-image" src={this.props.listing.picture} />
        <div className="listing-detail-content">
          <div className="listing-title-book">
            <div className="address-city">
              <h2 className="listing-detail-address">{this.props.listing.address}</h2>
              <h2 className="listing-detail-city">{this.props.listing.city}</h2>
            </div>
            <button className="booking-button" onClick={this.handleClick}>Book Floor</button>
          </div>
          <span className="description">{this.props.listing.description}</span>
          <span className="max-guests">Maximum Guests: {this.props.listing.max_guests}</span>
        </div>
        <div className="listing-detail-reviews">
          <h2 className="reviews">Reviews</h2>
          {reviewEls}
        </div>
        <Modal
          className="bookingModal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          >
          <BookingFormContainer listing={this.props.listing} />
        </Modal>
      </div>
    )
  }
}

export default ListingDetail;
