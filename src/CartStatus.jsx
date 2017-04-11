import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import {Link} from "react-router"

class CartStatus extends React.Component {

  getCartStatus() {
    if(this.props.cart.size === 0){
      return "";
    }
    let cartSize = 0;
    this.props.cart.forEach(item => cartSize = cartSize + item.get("amount"));
    return cartSize;
  }

  getStyle() {
    return this.props.cart.size == 0 ? {display: "none"} : {display: "inline-block"}
  }

  render() {
    return (
      <div>
        <Link to='/cart'>
          <img src="./cart.png" width="30"></img>
        </Link>
        <span id="cartCounter" style={this.getStyle()}>{this.getCartStatus()}</span>
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
