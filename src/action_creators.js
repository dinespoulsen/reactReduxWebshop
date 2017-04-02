export function setStateAction(entries) {
  return {
    type: 'SET_STATE',
    entries: entries
  };
}

export function addToCartAction(entry) {
  return {
    type: 'ADD_TO_CART',
    shoeId: entry
  };
}
