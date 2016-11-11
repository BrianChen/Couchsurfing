import { createReview } from '../util/review_api_util';
import { receiveListing } from '../actions/listing_actions';
import { CREATE_REVIEW } from '../actions/review_actions';

export default ({getState, dispatch}) => next => action => {
  const success = (data) => dispatch(receiveListing(data))
  const error = e => console.log(e.responseJSON);

  switch(action.type) {
    case CREATE_REVIEW:
      createReview(action.review, success, error);
      return next(action);
    default:
      return next(action);
  }
}
