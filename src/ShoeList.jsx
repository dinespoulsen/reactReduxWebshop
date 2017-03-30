import React from "react";
import Shoe from "../src/Shoe.jsx"

class ShoeList extends React.Component {

  render() {
    let shoes;
    if(this.props.shoes != null )
    {
      shoes = this.props.shoes.map((shoe) => {
        return (
          <li key={shoe.get("id")}><Shoe name={shoe.get("name")} price={shoe.get("price")} /></li>
        ) ;
      });
    }

    return (
      <ul>
        {shoes}
      </ul>
    );
  }

};

export default ShoeList;
