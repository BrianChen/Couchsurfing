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
            <span className="rating">
              <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1"
                 value="1"/>
              <label for="rating-input-1-5" className="rating-star"></label>
              <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" value="2"/>
              <label for="rating-input-1-4" className="rating-star"></label>
              <input type="radio"  defaultChecked="checked" className="rating-input" id="rating-input-1-3" name="rating-input-1" value="3"/>
              <label for="rating-input-1-3" className="rating-star"></label>
              <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" value="4"/>
              <label for="rating-input-1-2" className="rating-star"></label>
              <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" value="5"/>
              <label for="rating-input-1-1" className="rating-star"></label>
            </span>
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
