import { expect } from 'chai';
import {setState} from "../src/coreActions.jsx";
import {List, Map, fromJS} from "immutable";

describe("setState", () => {
  it(" should return the initial state when passed a List of shoes", () => {
    let input = [
      {id: 1, name: "shoeName", price: 10},
      {id: 2, name: "secondShoe", price: 20}
    ];
    let shoeList = fromJS(input);
    let initialState = Map(shoeList: shoeList);
    let nextState = setState(initialState);
    expect(nextState).to.equal(initialState);
  });
});
