import { connect } from 'react-redux';
import UserBox from './user_box';
import { updateListing } from '../actions/listing_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  updateListing: (listing) => dispatch(updateListing(listing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBox);
