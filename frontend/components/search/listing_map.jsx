import React from 'react';
import MarkerManager from '../../util/marker_manager';

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
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarketManager.updateMarkers(this.props.listings)
  }
  _handleMarkerClick() {
    //used to handle click on single listing(can use for bookings)
    //this.props.router.push(`listings/${listing.id}`)
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {

    return (
      <div id='map-container' ref='map' className="map">
        MAP
      </div>
    )
  }
}

export default ListingMap;
