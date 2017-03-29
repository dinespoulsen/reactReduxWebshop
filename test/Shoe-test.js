import { expect } from "chai";
import React from "react";
import { mount, shallow } from 'enzyme';

describe("<Shoe />", () => {
  it("should be able to render", () => {
    const wrapper = shallow(<Shoe />);
    expect(wrapper.exists()).toBe(true);
  });
});
