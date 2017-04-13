import React from "react";
import CartList from "../src/CartList.jsx"
import {CartListContainer} from "./CartList.jsx";
import {CartTotalContainer} from "./CartTotal.jsx";

class CartPage extends React.Component {

  render() {
    return (
      <div>
       <CartListContainer></CartListContainer>
       <CartTotalContainer></CartTotalContainer>
      </div>
    );
  }

};

export default CartPage;
