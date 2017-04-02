import {setState, addToCart, INITIAL_STATE} from "../src/coreActions.jsx";

export default function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case "SET_STATE":
      return setState(state, action.entries);
    case "ADD_TO_CART":
      let shoeToAdd = state.get("entries").find(shoe => shoe.get("id") == action.shoeId)
      return addToCart(state, shoeToAdd);
  }
  return state;
};
