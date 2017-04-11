import CartStatus from "../src/CartStatus.jsx";
import React from "react";
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import {List, fromJS} from "immutable";

describe("<CartStatus />", () => {
  it("should render with 0 in the status", () => {
    const wrapper = shallow(<CartStatus cart={List([])}/>);
    expect(wrapper.find("span").text()).to.equal("");
  });

  it("should render with 1 in the status when cart holds one shoe", () => {
    let shoe = fromJS({id: 1, amount: 1})
    const wrapper = shallow(<CartStatus cart={List([shoe])}/>);
    expect(wrapper.find("span").text()).to.equal("1");
  });

  it("should render with a cart icon", () => {
    const wrapper = shallow(<CartStatus cart={List([])}/>);
    expect(wrapper.find("img").exists()).to.equal(true);
  });
});
