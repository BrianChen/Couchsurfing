import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class ListingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listingId = this.props.listing.id;
    hashHistory.push(`listings/${listingId}`)
  }

  render() {
    return (
      <div className="listing-index-item" onClick={this.handleClick} >
        <div className="listings-list">
          <div className="listing-content">
            <div className="listing-image-div">
              <img className="listing-image" src={this.props.listing.picture}/>
            </div>
            <div className="listing-address-city">
              <span>Address: {this.props.listing.address}</span><br/>
              <span>City: {this.props.listing.city}</span>
            </div>
          </div>
          <div className="listing-description">
            <span>Description: {this.props.listing.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
