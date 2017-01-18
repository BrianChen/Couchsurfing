import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { retrieveListing } from '../../actions/listing_actions';
import { selectListing } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, { params }) => {
  const listingId = parseInt(params.listingId);
  const listing = selectListing(state, listingId);
  return {
    listingId,
    listing,
  }
}

const mapDispatchToProps = dispatch => ({
  retrieveListing: id => dispatch(retrieveListing(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow)
