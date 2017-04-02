import CartStatus from "../src/CartStatus.jsx";
import React from "react";
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import {List, fromJS} from "immutable";

describe("<CardStatus />", () => {
  it("should render with 0 in the status", () => {
    const wrapper = shallow(<CartStatus cart={List([])}/>);
    console.log(wrapper.debug());
    expect(wrapper.find("p").text()).to.equal("0");
  });

  it("should render with 1 in the status when cart holds one shoe", () => {
    let shoe = fromJS({id: 1})
    const wrapper = shallow(<CartStatus cart={List([shoe])}/>);
    expect(wrapper.find("p").text()).to.equal("1");
  });
});
