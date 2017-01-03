import LoginForm from './login_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  guestLogin: () => dispatch(login({email: "steph@gmail.com", password: "password1" }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
