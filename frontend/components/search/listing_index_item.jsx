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
        <h1>{this.props.listing.id}</h1>
        <h1>{this.props.listing.address}</h1>
        <h1>{this.props.listing.city}</h1>
        <h1>{this.props.listing.description}</h1>
      </div>
    );
  }
}

export default withRouter(ListingIndexItem);
