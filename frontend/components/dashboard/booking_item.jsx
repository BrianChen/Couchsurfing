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
    this.setState({modalOpen: false})
  }

  handleClick() {
    this.setState({
      modalOpen: true
    })
  }

  render() {
    return (
      <li>
        <h1 className="user-name">{this.props.bookingItem.user.name}</h1>
        <div className="contents">
          <h1 className="city">{this.props.bookingItem.user.city}</h1>
          <h1>{this.props.bookingItem.user.email}</h1>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ReviewModalStyle}
          >
          <ReviewFormContainer booking={this.props.bookingItem} closeModal={this.onModalClose}/>
        </Modal>
        <button id="review-button" onClick={this.handleClick}>Review</button>
      </li>
    )
  }
}

export default BookingItem;
