import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import BookingReducer from './booking_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  bookings: BookingReducer
});

export default rootReducer;
