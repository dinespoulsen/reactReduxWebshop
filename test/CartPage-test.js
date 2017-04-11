import CartPage from "../src/CartPage.jsx";
import React from "react";
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import {List, fromJS} from "immutable";

describe("<CartPage />", () => {
    it("should be able to render", () => {
        const wrapper = shallow(<CartPage/>);
        expect(wrapper.exists()).to.equal(true);
    });
    it("should be able to render a CartList component", () => {

    });

});