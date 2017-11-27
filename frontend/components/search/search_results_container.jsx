import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import SearchResults from './search_results';

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchResults);
