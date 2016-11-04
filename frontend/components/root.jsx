import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SplashContainer from './splash_container';
import DashboardContainer from './dashboard_container';
import App from './app';

class Root extends React.Component {

  constructor(props) {
    super(props);

    this.ensureLogin = this.ensureLogin.bind(this);
  }

  ensureLogin(nextState, replace) {
    if (this.props.store.getState().session.currentUser === {}) {
      replace('/');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SplashContainer}/>
            <Route path="/dashboard" component={DashboardContainer} onEnter={this.ensureLogin}/>
          </Route>
        </Router>
      </Provider>
    )
  };
};

export default Root;
