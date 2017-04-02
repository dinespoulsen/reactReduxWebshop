import React from "react";

class Shoe extends React.Component {

  render() {
    return (
      <div className="shoe">
        <p>{this.props.name}</p>
        <img src={this.props.imgSrc} width="200"/>
        <p>Price: {String(this.props.price)}</p>
        <button id={this.props.id} onClick={() => this.props.addToCartAction(this.props.id)}>Add to cart</button>
      </div>
    );
  }

};

export default Shoe;
