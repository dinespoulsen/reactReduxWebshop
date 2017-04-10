import {setState, addToCart, removeFromCart, settleCart, INITIAL_STATE} from "../src/coreActions.jsx";

export default function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case "SET_STATE":
      return setState(state, action.entries);
    case "ADD_TO_CART":
      let shoeToAdd = state.get("entries").find(shoe => shoe.get("id") == action.shoeId)
      return addToCart(state, shoeToAdd);
    case "REMOVE_FROM_CART":
      let shoeToRemove = state.get("entries").find(shoe => shoe.get("id") == action.shoeId);
      return removeFromCart(state, shoeToRemove);
    case "SETTLE_CART":
      return settleCart(state);
  }
  return state;
};
