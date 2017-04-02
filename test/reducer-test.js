import { expect } from 'chai';
import reducer from "../src/reducer.jsx";
import { Map, List, fromJS} from "immutable";

describe("reducer", () => {
  it("should be able to set the initial state", () => {
    let input = [
      {id: 1, name: "shoeName", price: 10},
      {id: 2, name: "secondShoe", price: 20}
    ];
    let shoeList = fromJS(input);
    let initialState = Map();
    let setStateAction = {type: "SET_STATE", entries: shoeList}
    let nextState = reducer(initialState, setStateAction);
    expect(nextState).to.equal(Map({entries: shoeList}));
  });

  it("should be able to add a shoe item to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let setStateAction = {type: "ADD_TO_CART", shoeId: shoe.get("id")}
    let nextState = reducer(initialState, setStateAction);
    expect(nextState).to.equal(Map({entries: List([shoe]), cart: List([shoe])}));
  });
});
