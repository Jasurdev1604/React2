import React from "react";
import Counter from "./Counter";
import { Hoover } from "./Hoover";

export default function index() {
  return (
    <React.Fragment>
      <h1>HOC</h1>
      <Counter />
      <Hoover />
    </React.Fragment>
  );
}
