import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => {
  return ({
    listings: asArray(state),
    startDate: state.filters.startDate,
    endDate: state.filters.endDate,
    center: state.filters.bounds.center
  })
}

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
