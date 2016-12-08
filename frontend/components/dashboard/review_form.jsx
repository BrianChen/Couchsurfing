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
          <span className="rating-star">
            <input id="rating-5" type="radio" name="rating" value="5"/>
            <label for="rating-5">5</label>
            <input id="rating-4" type="radio" name="rating" value="4"/>
            <label for="rating4">4</label>
            <input id="rating3" type="radio" name="rating" value="3"/>
            <label for="rating3">3</label>
            <input id="rating2" type="radio" name="rating" value="2"/>
            <label for="rating2">2</label>
            <input id="rating1" type="radio" name="rating" value="1"/>
            <label for="rating1">1</label>
          </span>
          <form className="review-form" onSubmit={this.handleSubmit}>
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
