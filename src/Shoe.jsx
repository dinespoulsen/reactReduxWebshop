import React from "react";

class Shoe extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }

};

export default Shoe;
