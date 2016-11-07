import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import ListingMiddleware from './listing_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListingMiddleware
);

export default RootMiddleware;
