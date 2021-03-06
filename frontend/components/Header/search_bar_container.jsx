import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
