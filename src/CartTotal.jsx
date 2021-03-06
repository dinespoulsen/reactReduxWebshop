import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import {Link} from "react-router";

class CartTotal extends React.Component {

  getTotal(){
    let total = 0;
    this.props.cart.forEach(item => total = total + item.get("amount")*item.get("price"));
    return total;
  }

  render() {
    let cartTotal;
    let isActive = this.props.cart.size >0;
    if(isActive) {
      cartTotal = <div className="cartTotal">
              <h4>Cart Summary:</h4>
              <p>Total: {this.getTotal()}</p>
              <Link to="/"><button id="settleCartButton" onClick={() => this.props.settleCartAction()}>Settle Cart</button></Link>
            </div>
    }
    else {
      cartTotal = <div></div>
    }
    return (
      <div>
        {cartTotal}
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
