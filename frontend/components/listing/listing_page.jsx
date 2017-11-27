import React from 'react';
import { Link } from 'react-router';

import ListingDetail from './listing_detail';
import ListingMap from '../map/google_map';
// import ReviewButton from './review_button';

class ListingPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const listings = {
      [this.props.listingId]: this.props.listing
    }
    const center = {lat: this.props.listing.latitude, lng: this.props.listing.longitude};
    return (
      <div className="single-listing">
        <div className="left-half">
          <ListingDetail listing={this.props.listing}/>
        </div>
        <div className="single-listing-map">
          <ListingMap
            center={center}
            listings={listings}
            listingId={this.props.listingId}
            showListing={true}
            retrieveListing={this.props.retrieveListing}
            />
        </div>
      </div>
    )
  }
};

export default ListingPage;
