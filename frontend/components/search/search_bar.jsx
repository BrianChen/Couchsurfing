import React from 'react';
import SearchContainer from './search_container';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.state.city}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        const bounds = {
          center: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
        }
        this.props.updateFilter('bounds', bounds);
        this.props.router.replace('/search');
      }
    })
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <form id="map-search" className="header-search-bar" onSubmit={this.handleSubmit}>
        <input onChange={this.update('city')} type="text" id="search-input" name="search" value={this.state.city} placeholder="Where are you going?"></input>
      </form>
    )
  }
}

export default withRouter(SearchBar);
