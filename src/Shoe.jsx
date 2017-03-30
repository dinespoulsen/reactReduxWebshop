import React from "react";

class Shoe extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>Price: {String(this.props.price)}</p>
      </div>
    );
  }

};

export default Shoe;
