// What's the purpose of this file and these functions? Where do we use them?
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

export function removeFromCartAction(entry) {
  return {
    type: "REMOVE_FROM_CART",
    shoeId: entry
  };
}

export function settleCartAction(entry) {
  return {
    type: "SETTLE_CART",
    shoeId: entry
  };
}
