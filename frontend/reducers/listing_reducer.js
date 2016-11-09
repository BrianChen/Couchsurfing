import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

let defaultState = {listings: []}

const ListingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings
    case RECEIVE_LISTING:
      let newState = {[action.listing.id]: action.listing};
      return merge({}, state, newState);
    default:
      return state;
  }
}

export default ListingReducer;
