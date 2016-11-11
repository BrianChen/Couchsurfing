export const updateListing = (listing, success, error) => {
  $.ajax({
    url: `/api/listings/${listing.id}`,
    type: 'PATCH',
    data: {listing},
    success,
    error
  });
};

export const fetchListings = (filters, success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/listings',
    data: {filters},
    success
  });
};

export const fetchListing = (id, success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/listings/${id}`,
    success,
    error
  })
}
