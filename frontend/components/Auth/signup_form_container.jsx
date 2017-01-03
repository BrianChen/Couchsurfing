import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import {login} from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  guestLogin: () => dispatch(login({email: "steph@gmail.com", password: "password1" }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
