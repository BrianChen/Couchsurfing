import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SplashContainer from './splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import App from './app';
import { retrieveBookings } from '../actions/booking_actions';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.getBookings = this.getBookings.bind(this);
    this.ensureLogin = this.ensureLogin.bind(this);
  }

  ensureLogin(nextState, replace) {
    if (this.props.store.getState().session.currentUser === {} || this.props.store.getState().session.currentUser === 'undefined') {
      replace('/');
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
            <IndexRoute component={SplashContainer}/>
            <Route path="dashboard" component={DashboardContainer} onEnter={this.getBookings}/>

          </Route>
        </Router>
      </Provider>
    )
  };
};

export default Root;
