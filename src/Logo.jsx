import React from "react";
import {Link} from "react-router";

class Logo extends React.Component {

render() {
  return (
    <div>
      <Link to="/"><h1 id="logo">ReactiveShoes</h1></Link>
    </div>
  )
}
};

export default Logo;
