import { Map, List } from 'immutable';

export const setState = (state, entries) => {
  let nextState = state.set("cart", List([]));
  return nextState.set("entries", entries);
};

export const addToCart = (state, entry) => {
  let cartList = state.get("cart") || List([]);
  let cartItem = cartList.find(item => item.get("id") == entry.get("id"))
  if(cartItem) {
    let index = cartList.findIndex(item => item.get("id") == entry.get("id"))
    let newAmount = cartItem.get("amount") + 1;
    return state.set("cart", cartList.set(index, cartItem.set("amount", newAmount)))
  }
  return state.set("cart", cartList.push(entry.set("amount", 1)));
};

export const removeFromCart = (state, entry) => {
  let cartList = state.get("cart") || List([]);
  let cartItem = cartList.find(item => item.get("id") == entry.get("id"))
  if(cartItem) {
    let index = cartList.findIndex(item => item.get("id") == entry.get("id"))
    let newAmount = cartItem.get("amount") - 1;
    if(newAmount === 0){
      let cartListNew = cartList.delete(index);
      return state.set("cart", cartListNew);
    }
    return state.set("cart", cartList.set(index, cartItem.set("amount", newAmount)));
  }
  return state;
}

export const settleCart = (state) => {
  let newSettlement = state.get("cart") || List([]);
  let settlements = state.get("settlements") || List([]);
  return state.set("cart", List([])).set("settlements", settlements.push(newSettlement));
};

export const INITIAL_STATE = Map();
