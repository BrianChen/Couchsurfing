import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import ListingMiddleware from './listing_middleware';
import BookingMiddleware from './booking_middleware';
import ReviewMiddleware from './review_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListingMiddleware,
  BookingMiddleware,
  ReviewMiddleware
);

export default RootMiddleware;
