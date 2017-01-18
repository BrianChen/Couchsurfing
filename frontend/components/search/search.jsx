import React from 'react';
import ListingMap from './listing_map';
import ListingIndexContainer from './listing_index_container';
import FilterForm from './filter_form';

class Search extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="search-page">
        <div className="left-half">
          <FilterForm startDate={this.props.startDate} endDate={this.props.endDate} updateFilter={this.props.updateFilter} />
          <ListingIndexContainer listings={this.props.listings} />
        </div>
        <div className="right-half">
          <ListingMap
            center={this.props.center}
            listings={this.props.listings}
            showListing={false}
            updateFilter={this.props.updateFilter}
          />
        </div>
      </div>
    );
  }
}

// const Search = ({listings, updateFilter, startDate, endDate, location}) => {
//   debugger;
//   return (
//     <div className="search-page">
//       <div className="left-half">
//         <FilterForm startDate={startDate} endDate={endDate} updateFilter={updateFilter} />
//         <ListingIndexContainer listings={listings} />
//       </div>
//       <div className="right-half">
//         <ListingMap
//           center={location}
//           listings={listings}
//           showListing={false}
//           updateFilter={updateFilter}
//         />
//       </div>
//     </div>
//   );
// }

export default Search;
