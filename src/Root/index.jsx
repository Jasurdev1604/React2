// import Lesson1 from "../lesson1";
// import Lesson2 from "../lesson2/root";
import Lesson3 from "../lesson3";

import React, { Component } from "react";

class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        {/* <Lesson1 /> */}
        {/* <Lesson2 /> */}
        <Lesson3 />
      </React.StrictMode>
    );
  }
}

export default Root;
