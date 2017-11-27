import React from 'react';
import PropTypes from 'prop-types';

import SearchItem from './search_item';
import { Link, withRouter } from 'react-router';

class SearchResults extends React.Component {

  handleClick(city) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': city}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const bounds = {
          center: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
        }
        this.props.updateFilter('bounds', bounds);
        this.props.router.replace('/search');
      }
    });
  }

  render() {
    if (this.props.listings.length === 0) {
      return (
        <div className="listing-index">
          <h1>Listings </h1>
          <div className="no-listings">
            <span className="no-results-text">No Results</span>
            <span className="try-another-text">Try another city. Here are some ideas:</span>
            <ul className="recommended-list">
              <li onClick={this.handleClick.bind(this,"San Francisco")}>San Francisco</li>
              <li onClick={this.handleClick.bind(this,"New York City")}>New York City</li>
              <li onClick={this.handleClick.bind(this,"Hong Kong City")}>Hong Kong City</li>
            </ul>
          </div>

        </div>
      );
    } else {
      return (
        <div className="listing-index">
          <h1>Listings </h1>
          {this.props.listings.map(listing => (
            <SearchItem listing={listing} key={listing.id} />
          ))}
        </div>
      );
    }
  }
}

SearchResults.proptypes = {
  updateFilter: PropTypes.func,
  listings: PropTypes.array
}

export default withRouter(SearchResults);
