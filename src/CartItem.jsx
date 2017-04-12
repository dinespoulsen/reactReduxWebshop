import React from "react";

class CartItem extends React.Component {

  render() {
    return (
      <div>
        <div className="cartItemImage" style={{display: "inline-block"}}>
          <img src={this.props.imgSrc} width="100"/>
        </div>
        <div className="cartItemDescription" style={{display: "inline-block"}}>
            <p>Name: {this.props.name}</p>
            <p>Price: {String(this.props.price)}</p>
            <p>Amount: {String(this.props.amount)}</p>
        </div>
        <div className="removeFromCart" style={{display: "inline-block"}}>
          <button id={this.props.id} onClick={() => this.props.removeFromCartAction(this.props.id)}>Remove from cart</button>
        </div>
      </div>
    );
  }

};

export default CartItem;
