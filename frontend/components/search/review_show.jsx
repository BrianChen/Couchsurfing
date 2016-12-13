import React from 'react';

class ReviewShow extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h4> Rating: {this.props.rating}</h4>
        <h4>{this.props.comment}</h4>
      </div>
    )
  }
}

export default ReviewShow;
