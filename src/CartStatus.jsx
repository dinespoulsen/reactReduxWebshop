import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

class CartStatus extends React.Component {

  getCartStatus() {
    return this.props.cart.size == 0 ? "" : this.props.cart.size;
  }

  render() {
    return (
      <div>
        <img src="./cart.png" width="30"></img>
        <span>{this.getCartStatus()}</span>
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    cart: state.get("cart")
  };
}


export const CartStatusContainer = connect(mapStateToProps, actionCreators)(CartStatus);

export default CartStatus;
