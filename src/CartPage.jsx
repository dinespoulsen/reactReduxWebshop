import React from "react";
import CartList from "../src/CartList.jsx"
import {CartListContainer} from "./CartList.jsx";

class CartPage extends React.Component {

  render() {
    return (
      <div>
       <CartListContainer></CartListContainer>
      </div>
    );
  }

};

export default CartPage;
