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
        <p>Cart: {this.getCartStatus()}</p>
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