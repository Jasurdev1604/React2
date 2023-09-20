import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
import Read from "./Read";
import Add from "./Add";

export default function index() {
  return (
    <React.Fragment>
      <Login />
      <hr />
      <Read />
      <hr />
      <Add />
    </React.Fragment>
  );
}
