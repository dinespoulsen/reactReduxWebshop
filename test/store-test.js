import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import makeStore from '../src/store.jsx';

describe("Redux store", () => {
  it("Should be able to hold the initial state", () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());
  });
});
