import { connect } from 'react-redux';
import { updateLocation } from '../../actions/location_actions';
import ListingIndex from './listing_index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateLocation: location => dispatch(updateLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
