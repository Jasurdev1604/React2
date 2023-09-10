// import Lesson1 from "../lesson1";
import Lesson2 from "../lesson2";

import React, { Component } from "react";

class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        {/* <Lesson1 /> */}
        <Lesson2 />
      </React.StrictMode>
    );
  }
}

export default Root;
