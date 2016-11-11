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
          <h1>Book a floor now!</h1>
        </header>
        <div className="booking-content">
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <input
              className="booking-start-date"
              type="date"
              onChange={this.updateState('start_date')} /><br/>
            <input
              className="booking-end-date"
              type="date"
              onChange={this.updateState('end_date')} /><br/>
            <input
              className="booking-guests"
              type="number"
              onChange={this.updateState('guests')} /><br/>
            <button id="booking-button" type="submit">Book This Floor</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(BookingForm);
