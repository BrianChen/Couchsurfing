import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
