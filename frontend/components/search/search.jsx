import React from 'react';
import ListingMap from './listing_map';
import ListingIndex from './listing_index';
import FilterForm from './filter_form';

const Search = ({listings, updateFilter, startDate, endDate, location}) => {
  debugger;
  console.log(this.refs);
  return (
    <div className="search-page">
      <div className="left-half">
        <FilterForm startDate={startDate} endDate={endDate} updateFilter={updateFilter} />
        <ListingIndex listings={listings} />
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
