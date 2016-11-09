import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import BookingReducer from './booking_reducer';
import ListingReducer from './listing_reducer';
import FilterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  bookings: BookingReducer,
  listings: ListingReducer,
  filters: FilterReducer
});

export default rootReducer;
