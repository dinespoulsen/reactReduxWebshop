import React from "react";

class Shoe extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <img src="./shoe.png"/>
        <p>Price: {String(this.props.price)}</p>
        <button id={this.props.id}>Add to cart</button>
      </div>
    );
  }

};

export default Shoe;
