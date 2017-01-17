import React from 'react';
import ListingIndexItem from './listing_index_item';
import { Link, withRouter } from 'react-router';

class ListingIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    debugger;
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': 'san francisco'}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
        this.props.updateLocation(location);
        this.props.router.pushState(null, '/search');
      }
    })
  }

  render() {
    if (this.props.listings.length === 0) {
      return (
        <div className="listing-index">
          <h1>Listings </h1>
          <div className="no-listings">
            <span className="no-listings-text" >No Results</span>
            <span>Try another city. Here are some ideas:</span>
            <ul>
              <li onClick={this.handleClick}>San Francisco</li>
              <li onClick={this.handleClick}>New York</li>
              <li onClick={this.handleClick}>Hong Kong</li>
            </ul>
          </div>

        </div>
      );
    } else {
      return (
        <div className="listing-index">
          <h1>Listings </h1>
          {this.props.listings.map(listing => (
            <ListingIndexItem listing={listing} key={listing.id} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(ListingIndex);
