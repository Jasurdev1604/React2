import React from "react";
import Hover from "./Hover";
import Counter from "./Counter";

export default function index() {
  return (
    <React.Fragment>
      <h1>HOC</h1>
      <Counter />
      <Hover />
    </React.Fragment>
  );
}
