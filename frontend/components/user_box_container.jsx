import { connect } from 'react-redux';
import UserBox from './user_box';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = () => ({
  // receiveAcceptingGuest: () => dispatch(receiveAcceptingGuest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBox);
