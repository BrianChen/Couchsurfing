export const selectListing = ({ listing }, id) => listing[id] || {};

export const asArray = ({ listings }) => Object.keys(listings).map(key => listings[key]);
