import React from 'react';
import { Link } from 'react-router';
import ListingDetail from './listing_detail';
import ListingMap from './listing_map';
// import ReviewButton from './review_button';

class ListingShow extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const listings = {
      [this.props.listingId]: this.props.listing
    }

    return (
      <div className="single-listing">
        <div className="left-half">
          <ListingDetail listing={this.props.listing}/>
        </div>
        <div className="single-listing-map">
          <ListingMap
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

export default ListingShow;
