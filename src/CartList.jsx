// Should render the cartItems from the cart.
import React from "react";
import {connect} from 'react-redux';
import CartItem from '../src/CartItem.jsx'
import * as actionCreators from './action_creators';

class CartList extends React.Component {
    render() {
        let cartItems;
        if(this.props.cartItems != null )
        {
            cartItems = this.props.cartItems.map((cartItem) => {
             let cartItemProps = {id: cartItem.get("id"), name: cartItem.get("name"), price: cartItem.get("price"), imgSrc: cartItem.get("imgSrc"), amount: cartItem.get("amount")}
             return (
                <li key={cartItem.get("id")}><CartItem {...cartItemProps} removeFromCartAction={this.props.removeFromCartAction}/></li>
        ) ;
      });
    }
        return (
            <ul>
                {cartItems}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return {
    cartItems: state.get("cart")
  };
}


export const CartListContainer = connect(mapStateToProps, actionCreators)(CartList);
export default CartList;
