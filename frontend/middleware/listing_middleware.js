import { createListing, updateListing, fetchListings, fetchListing } from '../util/listing_api_util';
import { CREATE_LISTING, UPDATE_LISTING, RETRIEVE_LISTINGS, RETRIEVE_LISTING, RECEIVE_LISTINGS, RECEIVE_LISTING, retrieveListings, receiveListings, receiveListing } from '../actions/listing_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import { UPDATE_FILTER } from '../actions/filter_actions';

export default ({getState, dispatch}) => next => action => {
  const success = (data) => dispatch(receiveListings(data));
  const listingSuccess = (data) => dispatch(receiveListing(data));
  const error = e => console.log(e.responseJSON);

  switch(action.type) {
    case CREATE_LISTING:
      createListing(action.listing, success, error);
      return next(action);
    case UPDATE_LISTING:
      updateListing(action.listing, success, error);
      return next(action);
    case RETRIEVE_LISTINGS:
      const filters = getState().filters;
      fetchListings(filters, success, error);
      return next(action);
    case RETRIEVE_LISTING:
      fetchListing(action.id, listingSuccess, error);
      return next(action);
    case UPDATE_FILTER:
      next(action);
      dispatch(retrieveListings());
    default:
      return next(action);
  }
}
