import React from 'react';
import PropTypes from 'prop-types';

import SearchMap from '../map/google_map';
import SearchResultsContainer from './search_results_container';
import FilterForm from '../Forms/filter_form';

const SearchPage = ({ start_date, end_date, updateFilter, listings, center }) => {
  return (
    <div className="search-page">
      <div className="left-half">
        <FilterForm start_date={start_date} end_date={end_date} updateFilter={updateFilter} />
        <SearchResultsContainer listings={listings} />
      </div>
      <div className="right-half">
        <SearchMap
          center={center}
          listings={listings}
          showListing={false}
          updateFilter={updateFilter}
        />
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  listings: PropTypes.array,
  center: PropTypes.object,
  updateFilter: PropTypes.func
}

export default SearchPage;
