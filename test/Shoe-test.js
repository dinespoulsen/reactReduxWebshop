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

  it("should take a image url props", () => {
    const wrapper = mount(<Shoe id="1"/>);
    expect(wrapper.props().id).to.equal("1");
  });

  it("should display the price when passed as a prop", () => {
    const wrapper = mount(<Shoe price={10}/>);
    expect(wrapper.find("div").childAt(2).text()).to.equal("Price: 10");
  });

  it("should render with a button", () => {
    const wrapper = mount(<Shoe id={1}/>);
    expect(wrapper.find("button").exists()).to.equal(true);
    expect(wrapper.find("button").props().id).to.equal(1);
  });

  it("should render with an image", () => {
    const wrapper = mount(<Shoe imgSrc={"./shoe.png"}/>);
    expect(wrapper.find("img").exists()).to.equal(true);
  });

  it("invokes a callback when the button is clicked", () => {
    let id;
    const addToCartAction = (entry) => id = entry;
    const wrapper = mount(<Shoe id="4" addToCartAction={addToCartAction}/>);
    let button = wrapper.find("button");
    button.simulate("click");
    expect(id).to.equal("4");
  });
});
