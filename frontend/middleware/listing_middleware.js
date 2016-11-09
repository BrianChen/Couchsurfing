import { createListing, updateListing, fetchListings, fetchListing } from '../util/listing_api_util';
import { CREATE_LISTING, UPDATE_LISTING, RETRIEVE_LISTINGS, RETRIEVE_LISTING, RECEIVE_LISTINGS, RECEIVE_LISTING, retrieveListings, receiveListings } from '../actions/listing_actions';
import { receiveCurrentUser } from '../actions/session_actions';

export default ({getState, dispatch}) => next => action => {
  const success = (data) => dispatch(receiveListings(data));
  const error = e => console.log(e.responseJSON);
  switch(action.type) {
    case CREATE_LISTING:
      createListing(action.listing, success, error)
    case UPDATE_LISTING:
      updateListing(action.listing, success, error)
    case RETRIEVE_LISTINGS:
      const filters = getState().filters;
      fetchListings(filters, success, error)
    case RETRIEVE_LISTING:
      fetchListing(action.listing, success, error)
    default:
      return next(action);
  }
}
