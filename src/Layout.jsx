import React from "react";
import Header from "./Header.jsx";

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    );
  }

};

export default Layout;
