import React from "react";
import Logo from "./Logo.jsx";
import {CartStatusContainer} from "./CartStatus.jsx";

class Header extends React.Component {

render() {
  return (
    <header>
      <Logo></Logo>
      <CartStatusContainer></CartStatusContainer>
    </header>);
}
};

export default Header;
