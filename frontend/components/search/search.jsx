import React from 'react';
import ListingMap from './listing_map';
import ListingIndexContainer from './listing_index_container';
import FilterForm from './filter_form';
import { updateLocation } from '../../actions/location_actions';

const Search = ({listings, updateFilter, startDate, endDate, location}) => {
  debugger;
  return (
    <div className="search-page">
      <div className="left-half">
        <FilterForm startDate={startDate} endDate={endDate} updateFilter={updateFilter} />
        <ListingIndexContainer listings={listings} />
      </div>
      <div className="right-half">
        <ListingMap
          center={location}
          listings={listings}
          showListing={false}
          updateFilter={updateFilter}
        />
      </div>
    </div>
  );
}

export default Search;
