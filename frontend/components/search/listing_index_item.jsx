import React from 'react';

class ListingIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h1>{this.props.listing.id}</h1>
        <h1>{this.props.listing.address}</h1>
        <h1>Inside ListingIndexItem</h1>
      </div>
    );
  }
}

export default ListingIndexItem;
