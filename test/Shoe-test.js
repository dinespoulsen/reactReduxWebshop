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
    expect(wrapper.props().name).to.equal("shoeName");
  });

  it("should display the price when passed as a prop", () => {
    const wrapper = mount(<Shoe price={10}/>);
    expect(wrapper.find("div").childAt(1).text()).to.equal("Price: 10");
  });
});
