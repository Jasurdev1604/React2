import React from "react";
import Context from "./context";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function index() {
  return (
    <React.Fragment>
      <Context>
        <Navbar />
        <Body />
      </Context>
    </React.Fragment>
  );
}
