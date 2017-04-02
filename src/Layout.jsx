import React from "react";
import {CartStatusContainer} from "./CartStatus.jsx";
import {ShoeListContainer} from "./ShoeList.jsx";

class Layout extends React.Component {

  render() {
    return (
      <div>
        <CartStatusContainer></CartStatusContainer>
        <ShoeListContainer></ShoeListContainer>
      </div>
    );
  }

};

export default Layout;
