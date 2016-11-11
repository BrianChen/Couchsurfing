import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

let mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 13
};

class ListingMap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.showListing) {
      this.props.retrieveListing(this.props.listingId)
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  componentDidUpdate() {
    if (this.props.showListing) {
      this.MarkerManager.updateMarkers([this.props.listings[Object.keys(this.props.listings)[0]]]);
    } else {
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  _handleMarkerClick(listing) {
    this.props.router.push(`listings/${listing.id}`);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', e => {
      const coords = {
        lat: e.latLng.lat(),
        lng: latLng.lng()
      };
      this._handleMarkerClick(coords);
    })
  }

  render() {
    return (
      <div id='map-container' ref='map' className="map">
        MAP
      </div>
    )
  }
}

export default withRouter(ListingMap);
