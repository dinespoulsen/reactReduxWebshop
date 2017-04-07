import React from "react";
import {CartStatusContainer} from "./CartStatus.jsx";
import {ShoeListContainer} from "./ShoeList.jsx";
import Header from "./Header.jsx";

class FrontPage extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <ShoeListContainer></ShoeListContainer>
      </div>
    );
  }

};

export default FrontPage;
