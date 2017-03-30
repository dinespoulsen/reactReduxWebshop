import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {Map, List, fromJS} from "immutable";
import ShoeList from "../src/ShoeList.jsx";

describe("<ShoeList />", () => {
  it("should be able to render", () => {
    const wrapper = shallow(<ShoeList/>);
    expect(wrapper.exists()).to.equal(true);
  });

  it("should be able to render a shoe component", () => {
    let input = [
      {id : 1, name : "shoeName", price: 10}
    ];
    var shoeList = fromJS(input);

    const wrapper = shallow(<ShoeList shoes={shoeList} />);
    expect(wrapper.children()).to.have.length(shoeList.size);
  });
});
