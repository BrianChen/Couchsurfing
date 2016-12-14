import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SplashContainer from './splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import App from './app';
import { retrieveBookings } from '../actions/booking_actions';
import SearchContainer from './search/search_container';
import ListingShowContainer from './search/listing_show_container';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.getBookings = this.getBookings.bind(this);
    this.ensureLogin = this.ensureLogin.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.method = this.method.bind(this);
  }

  ensureLogin(nextState, replace) {
    if (this.props.store.getState().session.currentUser === {} || this.props.store.getState().session.currentUser === 'undefined') {
      replace('/');
    }
  }

  method(nextState, replace) {
    console.log(this.props.store);
    debugger;
  }

  checkLogin(nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace('dashboard');
    }
  }

  getBookings(nextState, replace) {
    if (!this.props.store.getState().session.currentUser) {
      replace('/');
    } else {
      this.props.store.dispatch(retrieveBookings());
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SplashContainer} onEnter={this.checkLogin}/>
            <Route path="/dashboard" component={DashboardContainer} onEnter={this.getBookings}/>
            <Route path="/search" component={SearchContainer} onEnter={this.method} />
            <Route path="/listings/:listingId" component={ListingShowContainer} onEnter={this.ensureLogin} />
          </Route>
        </Router>
      </Provider>
    )
  };
};

export default Root;
