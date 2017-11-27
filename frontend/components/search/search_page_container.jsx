import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import SearchPage from './search_page';

const mapStateToProps = state => {
  return ({
    listings: asArray(state),
    start_date: state.filters.dates.start_date,
    end_date: state.filters.dates.end_date,
    center: state.filters.bounds.center
  })
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
