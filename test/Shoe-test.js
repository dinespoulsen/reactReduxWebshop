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

  it("should take an Id props", () => {
    const wrapper = mount(<Shoe id="1"/>);
    expect(wrapper.props().id).to.equal("1");
  });

  it("should display the price when passed as a prop", () => {
    const wrapper = mount(<Shoe price={10}/>);
    expect(wrapper.find("div").childAt(1).text()).to.equal("Price: 10");
  });

  it("should render with a button", () => {
    const wrapper = mount(<Shoe id={1}/>);
    expect(wrapper.find("button").exists()).to.equal(true);
    expect(wrapper.find("button").props().id).to.equal(1);
  });
});
