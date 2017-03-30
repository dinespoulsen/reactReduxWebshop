import React from "react";
import Shoe from "../src/Shoe.jsx"

class ShoeList extends React.Component {

  render() {
    let shoes;
    if(this.props.shoes != null )
    {
      shoes = this.props.shoes.map((shoe) => {
        return (
          <Shoe key={shoe.id} name={shoe.name} price={shoe.price} />
        ) ;
      });
    }

    return (
      <div>
        {shoes}
      </div>
    );
  }

};

export default ShoeList;
