export const createListing = (listing, success, error) => {
  $.ajax({
    url: '/api/listings',
    type: 'POST',
    data: {listing},
    success,
    error
  });
}

export const updateListing = (listing, success, error) => {
  $.ajax({
    url: `/api/listings${listing.id}`,
    type: 'POST',
    data: {listing},
    success,
    error
  });
}
