import LoginForm from './login_form';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
