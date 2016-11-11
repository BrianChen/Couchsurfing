export const selectListing = ({ listings }, id) => listings[id] || {};

export const asArray = ({ listings }) => Object.keys(listings).map(key => listings[key]);
