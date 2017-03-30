import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {Map, List} from "immutable";
import ShoeList from "../src/ShoeList.jsx";

describe("<ShoeList />", () => {
  it("should be able to render", () => {
    // let shoes = List.of([{"name": "shoeName", "price": 10}])
    // console.log(shoes.get(0)[0].name);
    const wrapper = shallow(<ShoeList/>);
    expect(wrapper.exists()).to.equal(true);
  });

  it("should be able to render a shoe component", () => {
    let shoes = [{id: 1, name: "shoeName", price: 10}];
    const wrapper = shallow(<ShoeList shoes={shoes} />);
    expect(wrapper.children().length).to.equal(shoes.length);
  });
});
