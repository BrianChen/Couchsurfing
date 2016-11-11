import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import Header from './header';
import { updateFilter } from '../actions/filter_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(login()),
  guestLogin: () => dispatch(login({email: "jacky@gmail.com", password: "password1" })),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
