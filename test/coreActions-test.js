import { expect } from 'chai';
import {setState, addToCart} from "../src/coreActions.jsx";
import {List, Map, fromJS} from "immutable";



describe("setState", () => {
  it(" should return the initial state when passed a List of shoes", () => {
    let input = [
      {id: 1, name: "shoeName", price: 10},
      {id: 2, name: "secondShoe", price: 20}
    ];
    let shoeList = fromJS(input);
    let initialState = Map();
    let nextState = setState(initialState, shoeList);
    expect(nextState).to.equal(Map({entries: shoeList}));
  });
});

describe("addToCart", () => {
  it(" should add a shoe to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    expect(nextState).to.equal(Map({entries: List([shoe]), cart: List([shoe])}));
  });

  it(" should add two shoes to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let shoeTwo = fromJS({id: 4, name: "SecondAdd", price: 30})
    let initialState = Map({entries: List([shoe, shoeTwo]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    let thirdState = addToCart(nextState, shoeTwo);
    expect(thirdState).to.equal(Map({entries: List([shoe, shoeTwo]), cart: List([shoe, shoeTwo])}));
  });
});
