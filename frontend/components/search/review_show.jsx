import React from 'react';

class ReviewShow extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    let src = "";
    if (this.props.rating === 5){
      src = 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481676616/5-stars_rm1fgw.png';
    } else if (this.props.rating === 4){
      src = 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481676615/4-stars_vxd9qa.png';
    } else if (this.props.rating === 3){
      src = 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481676615/3-stars_v5gskj.png';
    } else if (this.props.rating === 2){
      src = 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481676615/2-stars_vsavhp.png';
    } else if (this.props.rating === 1){
      src = 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481676615/1-stars_tyhtuh.png';
    } else {
      src = 'http://res.cloudinary.com/dxfjyn0nq/image/upload/v1481676615/0-stars_r7nnj6.png';
    }
    return (
      <div className="review-show">
        <div className="review-show-rating">
          <span> Rating: {this.props.rating}</span>
        </div>
        <div className="review-show-comment">
          <span>{this.props.comment}</span>
        </div>
      </div>
    )
  }
}

export default ReviewShow;
