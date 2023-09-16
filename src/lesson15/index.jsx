import React from "react";
import Context from "./context";
import Navbar from "./components/Count";

export default function index() {
  return (
    <React.Fragment>
      <Context>
        <Navbar />
      </Context>
    </React.Fragment>
  );
}
