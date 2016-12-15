import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import BookingReducer from './booking_reducer';
import ListingReducer from './listing_reducer';
import FilterReducer from './filter_reducer';
import LocationReducer from './location_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  bookings: BookingReducer,
  listings: ListingReducer,
  filters: FilterReducer,
  location: LocationReducer
});

export default rootReducer;
