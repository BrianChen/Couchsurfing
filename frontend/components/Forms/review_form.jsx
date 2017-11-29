import React from 'react';
import PropTypes from 'prop-types';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listing_id: this.props.booking.listing_id,
      comment: "",
      rating: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.props.closeModal();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleOptionChange(e) {
    e.preventDefault();
    this.setState({
      rating: parseInt(e.target.id)
    });
  }

  render() {
    return (
      <div>
        <header className="review-header">
          <h1>Review</h1>
        </header>
        <div className="review-content">
          <form className="review-form" onSubmit={this.handleSubmit}>
            <div className="rating-div">
              <span>Rating: </span>
              <span className="rating">
                <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1"
                value="option5" checked={this.state.rating === 5}/>
                <label htmlFor="rating-input-1-5" className="rating-star" id={5}                 onClick={this.handleOptionChange}></label>
                <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" value="option4" checked={this.state.rating === 4}/>
                <label htmlFor="rating-input-1-4" className="rating-star" onClick={this.handleOptionChange} id={4}></label>
                <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" value="option3" checked={this.state.rating === 3}/>
                <label htmlFor="rating-input-1-3" className="rating-star" onClick={this.handleOptionChange} id={3}></label>
                <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" value="option2" checked={this.state.rating === 2}/>
                <label htmlFor="rating-input-1-2" className="rating-star" onClick={this.handleOptionChange} id={2}></label>
                <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" value="option1" checked={this.state.rating === 1}/>
                <label htmlFor="rating-input-1-1" className="rating-star" onClick={this.handleOptionChange} id={1}></label>
            </span>
            </div>
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

ReviewForm.proptypes = {
  booking: PropTypes.object,
  createReview: PropTypes.func,
  closeModal: PropTypes.func
}

export default ReviewForm;
