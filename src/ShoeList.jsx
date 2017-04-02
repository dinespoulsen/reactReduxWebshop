import React from "react";
import Shoe from "../src/Shoe.jsx"
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

class ShoeList extends React.Component {

  render() {
    let shoes;
    if(this.props.shoes != null )
    {
      shoes = this.props.shoes.map((shoe) => {
        return (
          <li key={shoe.get("id")}><Shoe id={shoe.get("id")} name={shoe.get("name")} price={shoe.get("price")} imgSrc={shoe.get("imgSrc")}/></li>
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

function mapStateToProps(state) {
  return {
    shoes: state.get("entries")
  };
}


export const ShoeListContainer = connect(mapStateToProps, actionCreators)(ShoeList);

export default ShoeList;
