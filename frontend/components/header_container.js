import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import Header from './header';
import { updateFilter } from '../actions/filter_actions';
import { updateLocation } from '../actions/location_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(login()),
  guestLogin: () => dispatch(login({email: "sheldon@gmail.com", password: "password1" })),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateLocation: (location) => dispatch(updateLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
