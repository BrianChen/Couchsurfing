import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import HomeContainer from './Pages/home_container';
import About from './Pages/pages_container';
import AboutUs from './Pages/about_us';
import HowItWorks from './Pages/howitworks';
import Safety from './Pages/safety';
import DashboardContainer from './dashboard/dashboard_container';
import SearchPageContainer from './search/search_page_container';
import ListingPageContainer from './listing/listing_page_container';
import { retrieveBookings } from '../actions/booking_actions';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.getBookings = this.getBookings.bind(this);
    this.ensureLogin = this.ensureLogin.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  ensureLogin(nextState, replace) {
    if (this.props.store.getState().session.currentUser === {} || this.props.store.getState().session.currentUser === 'undefined') {
      replace('/');
    }
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
            <IndexRoute component={HomeContainer} onEnter={this.checkLogin}/>
            <Route path="/about" component={About}>
              <IndexRoute component={AboutUs}/>
              <Route path='/howitworks' component={HowItWorks}/>
              <Route path='/safety' component={Safety}/>
            </Route>
            <Route path="/search" component={SearchPageContainer} onEnter={this.ensureLogin}/>
            <Route path="/dashboard" component={DashboardContainer} onEnter={this.getBookings}/>
            <Route path="/listings/:listingId" component={ListingPageContainer} onEnter={this.ensureLogin} />
          </Route>
        </Router>
      </Provider>
    )
  };
};

export default Root;
