export const CREATE_LISTING = 'CREATE_LISTING';
export const UPDATE_LISTING = 'UPDATE_LISTING';

export const createListing = (listing) => ({
  type: CREATE_LISTING,
  listing
})

export const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
});
