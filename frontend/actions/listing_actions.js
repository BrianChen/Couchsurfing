export const CREATE_LISTING = 'CREATE_LISTING';
export const UPDATE_LISTING = 'UPDATE_LISTING';
export const RETRIEVE_LISTINGS = 'RETRIEVE_LISTINGS';
export const RETRIEVE_LISTING = 'RETRIEVE_LISTING';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';

export const createListing = (listing) => ({
  type: CREATE_LISTING,
  listing
})

export const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
});

export const retrieveListings = () => ({
  type: RETRIEVE_LISTINGS,
});

export const retrieveListing = id => ({
  type: RETRIEVE_LISTINGS,
  id
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
})

export const receiveListings = listings => ({
  type: RECEIVE_LISTING,
  listings
})
