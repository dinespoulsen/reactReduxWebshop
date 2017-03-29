import React from "react";
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Shoe from "../src/Shoe.jsx"

describe("<Shoe />", () => {
  it("should be able to render", () => {
    const wrapper = shallow(<Shoe/>);
    expect(wrapper.exists()).to.equal(true);
  });

  it("should take a name props", () => {
    const wrapper = mount(<Shoe name="shoeName"/>);
    let element = wrapper.find("p");
    expect(element.text()).to.equal("shoeName");
  });
});
