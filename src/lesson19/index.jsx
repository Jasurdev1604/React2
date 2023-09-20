import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
import Read from "./Read";

export default function index() {
  return (
    <React.Fragment>
      <Login />
      <hr />
      <Read />
    </React.Fragment>
  );
}
