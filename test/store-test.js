import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import makeStore from '../src/store.jsx';

describe("Redux store", () => {
  it("Should be able to hold the initial state", () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    let input = [
      {id: 1, name: "shoeName", price: 10},
      {id: 2, name: "secondShoe", price: 20}
    ];
    let shoeList = fromJS(input);
    let setStateAction = {type: "SET_STATE", entries: shoeList}
    store.dispatch(setStateAction);
    expect(store.getState()).to.equal(Map({entries: shoeList, cart: List([])}));
  });
});
