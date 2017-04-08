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

export const removeFromCart = (state, entry) => {
  let cartList = state.get("cart") || List([]);
  let index = cartList.findIndex(shoe => shoe.get("id") == entry.get("id"));
  return state.set("cart", cartList.delete(index));
}

export const settleCart = (state) => {
  let newSettlement = state.get("cart") || List([]);
  let settlements = state.get("settlements") || List([]);
  return state.set("cart", List([])).set("settlements", settlements.push(newSettlement));
};

export const INITIAL_STATE = Map();
