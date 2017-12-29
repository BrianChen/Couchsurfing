import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import ListingDetail from './listing_detail';
import ListingMap from '../map/google_map';

const ListingPage = ({listingId, listing, retrieveListing}) => {
  const listings = {
    [listingId]: listing
  }
  const center = {lat: listing.latitude, lng: listing.longitude};
  return (
    <div className="single-listing">
      <div className="">
        <ListingDetail listing={listing}/>
      </div>
      <div className="single-listing-map">
        <ListingMap
          center={center}
          listings={listings}
          listingId={listingId}
          showListing={true}
          retrieveListing={retrieveListing}
          />
      </div>
    </div>
  );
}

ListingPage.propTypes = {
  listingId: PropTypes.number,
  listing: PropTypes.object,
  retrieveListing: PropTypes.func
}


export default ListingPage;
