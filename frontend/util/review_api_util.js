export const createReview = (review, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/reviews',
    data: {review},
    success,
    error
  })
}
