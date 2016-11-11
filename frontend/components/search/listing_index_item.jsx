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
      <div className="listing-index-item" onClick={this.handleClick}>
        <ul className="listings-list">
          <li>Address: {this.props.listing.address}</li>
          <li>City: {this.props.listing.city}</li><br/>
          <li>Description: {this.props.listing.description}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
