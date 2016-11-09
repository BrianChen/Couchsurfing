import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(login()),
  guestLogin: () => dispatch(login({email: "jacky@gmail.com", password: "password1" }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
