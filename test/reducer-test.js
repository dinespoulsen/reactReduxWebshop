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
    expect(nextState).to.equal(Map({entries: shoeList, cart: List([])}));
  });

  it("should be able to add a shoe item to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let addShoeAction = {type: "ADD_TO_CART", shoeId: shoe.get("id")}
    let nextState = reducer(initialState, addShoeAction);
    expect(nextState).to.equal(Map({entries: List([shoe]), cart: List([shoe.set("amount", 1)])}));
  });

  it("should be able to remove a shoe from the cart", () => {
    let shoe = fromJS({id: 4, name: "RemovedShoe", price: 30, amount: 1});
    let initialState = Map({entries: List([shoe]), cart: List([shoe])});
    let removeShoeAction = {type: "REMOVE_FROM_CART", shoeId: shoe.get("id")};
    let nextState = reducer(initialState, removeShoeAction);
    expect(nextState).to.equal(Map({entries: List([shoe]), cart: List([])}));
  });

  it("should be able to setle a shopping cart", () => {
    let firstShoe = fromJS({id: 4, name: "firstShoe", price: 30});
    let secondShoe = fromJS({id: 5, name: "secondShoe", price: 30});
    let initialState = Map({entries: List([firstShoe, secondShoe]), cart: List([firstShoe, secondShoe])});
    let settleCartAction = {type: "SETTLE_CART"};
    let nextState = reducer(initialState, settleCartAction);
    expect(nextState).to.equal(Map({entries: List([firstShoe, secondShoe]), cart: List([]), settlements: List([List([firstShoe, secondShoe])])}));
  });
});
