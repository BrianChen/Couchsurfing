import { createListing, updateListing} from '../util/listing_api_util';
import { CREATE_LISTING, UPDATE_LISTING} from '../actions/listing_actions';

export default ({getState, dispatch}) => next => action => {
  const success = (data) => dispatch(data);
  const error = e => console.log(e.responseJSON);

  switch(action.type) {
    case CREATE_LISTING:
      createListing(action.listing, success, error)
    case UPDATE_LISTING:
      updateListing(action.listing, success, error)
    default:
      return next(action);
  }
}
