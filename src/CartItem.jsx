import React from "react";

class CartItem extends React.Component {

  render() {
    return (
      <div className="cartItem">
        <p>{this.props.name}</p>
        <img src={this.props.imgSrc} width="200"/>
        <p>Price: {String(this.props.price)}</p>
        <p>Amount {String(this.props.amount)}</p>
        <button id={this.props.id} onClick={() => this.props.removeFromCartAction(this.props.id)}>Remove from cart</button>
      </div>
    );
  }

};

export default CartItem;
