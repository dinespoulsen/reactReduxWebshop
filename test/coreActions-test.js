import { expect } from 'chai';
import {setState, addToCart, removeFromCart, settleCart} from "../src/coreActions.jsx";
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
    expect(nextState).to.equal(Map({entries: shoeList, cart: List([])}));
  });
});

describe("addToCart", () => {
  it(" should add a shoe to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    expect(nextState).to.equal(Map({entries: List([shoe]), cart: List([shoe.set("amount", 1)])}));
  });

  it(" should add two shoes to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let shoeTwo = fromJS({id: 4, name: "SecondAdd", price: 30})
    let initialState = Map({entries: List([shoe, shoeTwo]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    let thirdState = addToCart(nextState, shoeTwo);
    expect(thirdState).to.equal(Map({entries: List([shoe, shoeTwo]), cart: List([shoe.set("amount", 1), shoeTwo.set("amount", 1)])}));
  });

  it(" should add two shoes of the same to the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    let thirdState = addToCart(nextState, shoe);
    expect(thirdState).to.equal(Map({entries: List([shoe]), cart: List([shoe.set("amount", 2)])}));
  });
});

describe("removeFromCart", () => {
  it(" should remove a shoe from the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    let thirdState = removeFromCart(nextState, shoe);
    expect(thirdState).to.equal(Map({entries: List([shoe]), cart: List([])}));
  });

  it(" should remove a shoe amount from the cart", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    let thirdState = addToCart(nextState, shoe);
    let fourthState = removeFromCart(thirdState, shoe);
    expect(fourthState).to.equal(Map({entries: List([shoe]), cart: List([shoe.set("amount", 1)])}));
  });

  it(" should remove second shoe from the cart", () => {
    let shoe = fromJS({id: 3, name: "Shoe", price: 30})
    let shoeTwo = fromJS({id: 4, name: "ShoeTwo", price: 30})
    let initialState = Map({entries: List([shoe, shoeTwo]), cart: List([])});
    let nextState = addToCart(initialState, shoe);
    let thirdState = addToCart(nextState, shoeTwo);
    let fourthState = removeFromCart(thirdState, shoeTwo);
    expect(fourthState).to.equal(Map({entries: List([shoe, shoeTwo]), cart: List([shoe.set("amount", 1)])}));
  });
})

describe("settleCart", () => {
  it("should move cart items to purchases", () => {
    let shoe = fromJS({id: 3, name: "AddedShoe", price: 30})
    let initialState = Map({entries: List([shoe]), cart: List([shoe])});
    let nextState = settleCart(initialState);
    expect(nextState).to.equal(Map({entries: List([shoe]), cart: List([]), settlements: List([List([shoe])])}));
  });
});
