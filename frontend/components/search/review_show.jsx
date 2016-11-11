import React from 'react';

const ReviewShow = ({ rating, comment }) => (
  <div>
    <ul>
      <li>Rating: {rating}</li>
      <li>{comment}</li>
    </ul>
  </div>
);

export default ReviewShow;
