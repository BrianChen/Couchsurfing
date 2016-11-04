import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../util/session_api_util';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
