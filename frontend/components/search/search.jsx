import React from 'react';
import ListingMap from './listing_map';
import ListingIndexContainer from './listing_index_container';
import FilterForm from './filter_form';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listings: this.props.listings,
      updateFilter: this.props.updateFilter,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      center: this.props.center
    }
  }

  componentWillReceiveProps(){
    console.log("Inside will receive props");
    console.log(this.props.listings);
  }

  componentWillMount(){
    console.log("Inside will mount");
    console.log(this.props.listings);
    this.setState({
      listings: this.props.listings,
      updateFilter: this.props.updateFilter,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      center: this.props.center
    })
  }

  render() {
    console.log("Inside render");
    console.log(this.props.listings);
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
