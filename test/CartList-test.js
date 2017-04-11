import CartList from "../src/CartList.jsx";
import React from "react";
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import {List, fromJS} from "immutable";

describe("<CartList />", () => {
    it("should be able to render", () => {
    const wrapper = shallow(<CartList/>);
    expect(wrapper.exists()).to.equal(true);
  });
});