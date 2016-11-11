import React from 'react';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listing_id: this.props.booking.listing_id,
      comment: "",
      rating: 5
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.props.closeModal();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div>
        <header className="review-header">
          <h1>Review</h1>
        </header>
        <div className="review-content">
          <form className="review-form" onSubmit={this.handleSubmit}>
            <input
              className="review-rating"
              type= "number"
              placeholder="Enter rating"
              onChange={this.update('rating')} /><br/>
            <textarea
              className="review-comment"
              cols="50"
              rows="10"
              placeholder="Your comment"
              onChange={this.update('comment')}/><br/>
            <button id="review-submit" type="submit">Submit this Review</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;
