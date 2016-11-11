import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../Auth/modal_style';
import BookingFormContainer from './booking_form_container';
// import ReviewShow from './review_show';

class ListingDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  handleClick() {
    this.setState({
      modalOpen: true
    })
  }

  onModalClose() {
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <div>
        <h3>Description: {this.props.listing.description}</h3>
        <h5>Address: {this.props.listing.address}</h5>
        <h5>City: {this.props.listing.city}</h5>
        <h5>max_guests: {this.props.listing.max_guests}</h5>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          >
          <BookingFormContainer listing={this.props.listing} />
        </Modal>
        <button className="booking-button" onClick={this.handleClick}>Book Floor</button>
      </div>
    )
  }
}

export default ListingDetail;
