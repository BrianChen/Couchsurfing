import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../util/session_api_util';

const mapStateToProps = (store) => {
  return {
    currentUser: store.session.currentUser,
    bookings: store.bookings.bookings,
    guests: store.bookings.guests
}};

export default connect(
  mapStateToProps,
  null
)(Dashboard)
