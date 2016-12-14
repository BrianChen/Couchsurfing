import React from 'react';
import { withRouter } from 'react-router';

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guest_id: this.props.currentUser.id,
      listing_id: this.props.listing.id,
      start_date: "",
      end_date: "",
      guests: 0
    }
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state);
    this.props.router.push('/dashboard');
  }

  render() {
    return (
      <div>
        <header className="booking-header">
          <h1>Book this floor now!</h1>
        </header>
        <div className="booking-content">
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <div className="booking-dates">
              <div className="booking-check-in">
                <span className="booking-check-in-span">Check In</span>
                <input
                  className="booking-start-date"
                  type="date"
                  onChange={this.updateState('start_date')} />
              </div>
              <div className="booking-check-out">
                <span className="booking-check-out-span">Check Out</span>
                <input
                  className="booking-end-date"
                  type="date"
                  onChange={this.updateState('end_date')} />
              </div>
            </div>
            <div className="booking-guests">
              <span className="booking-guests-span">Guests</span>
              <input
                className="booking-guests-input"
                type="number"
                onChange={this.updateState('guests')} />
            </div>
            <div className="booking-button-div">
              <button id="booking-button" type="submit">Book This Floor</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(BookingForm);
