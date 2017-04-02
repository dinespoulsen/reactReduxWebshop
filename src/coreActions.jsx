import {Map} from 'immutable';

export const setState = (state, entries) => {
  return state.set("entries", entries);
};

export const addToCart = (state, entry) => {
  let cartList = state.get("cart");
  let cartListNew = cartList.push(entry);
  return state.set("cart", cartListNew);
};

export const INITIAL_STATE = Map();
