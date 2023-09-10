import Lesson1 from "../lesson1";

import React, { Component } from "react";

class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        <Lesson1 />
      </React.StrictMode>
    );
  }
}

export default Root;
