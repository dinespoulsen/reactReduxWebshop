import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

class CartStatus extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.cart.size}</p>
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
