import React from 'react';

class ReviewShow extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>Rating: {this.props.rating}</li>
          <li>{this.props.comment}</li>
        </ul>
      </div>
    )
  }
}

export default ReviewShow;
