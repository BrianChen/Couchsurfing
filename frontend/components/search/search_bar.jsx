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

  // componentDidMount() {
  //   this.input = document.getElementById('search-input')
  //   let options = {types: ['(cities)']};
  //   this.autocomplete = new google.maps.places.Autocomplete(this.input, options);
  //   this.autocomplete.addListener('place_changed', this.search);
  // }

  // search() {
  //   let place = this.autocomplete.getPlace();
  //   if (place.geometry) {
  //     this.setState({
  //       // location: place.query,
  //       lat: place.geometry.location.lat(),
  //       lng: place.geometry.location.lng(),
  //       location: ""
  //     });
  //     this.props.updateSpacetime(this.state);
  //     hashHistory.push("/location_search");
  //   } else {
  //     let service = new google.maps.places.AutocompleteService();
  //     let placeService = new google.maps.places.PlacesService(this.input);
  //     let placeRequest = (predictions, status) => {
  //       let request = { placeId: predictions[0].place_id };
  //       placeService.getDetails(request, (details) => {
  //         this.setState({
  //           lat: details.geometry.location.lat(),
  //           lng: details.geometry.location.lng(),
  //           location: "",
  //           era: this.props.spacetime.era
  //         });
  //         this.props.updateSpacetime(this.state);
  //         hashHistory.push("/location_search");
  //       });
  //     };
  //     service.getQueryPredictions({input: this.input.value}, placeRequest);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    // let searchBox = new google.maps.places.searchBox(document.getElmentById('map-search'));
    // google.maps.event.addListener(searchBox, 'places_changed', this.
    // })
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': this.state.city}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        debugger;
        const location = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
        this.props.updateLocation(location);
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
