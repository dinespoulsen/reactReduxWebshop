import { Map, List } from 'immutable';

export const setState = (state, entries) => {
  let nextState = state.set("cart", List([]));
  return nextState.set("entries", entries);
};

export const addToCart = (state, entry) => {
  let cartList = state.get("cart") || List([]);
  let cartListNew = cartList.push(entry);
  return state.set("cart", cartListNew);
};

export const INITIAL_STATE = Map();
