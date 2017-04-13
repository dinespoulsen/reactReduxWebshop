import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

class CartTotal extends React.Component {

  getTotal(){
    let total = 0;
    this.props.cart.forEach(item => total = total + item.get("amount")*item.get("price"));
    return total;
  }

  render() {
    return (
      <div className="cartTotal">
        <h4>Cart Summary:</h4>
        <p>Total: {this.getTotal()}</p>
        <button id="settleCartButton">Settle Cart</button>
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    cart: state.get("cart")
  };
}


export const CartTotalContainer = connect(mapStateToProps, actionCreators)(CartTotal);

export default CartTotal;
