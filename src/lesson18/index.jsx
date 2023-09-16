import React from "react";
import Controlled from "./Controlled";
import UnControlled from "./UnControlled";

export default function index() {
  return (
    <React.Fragment>
      <div>
        <Controlled />
        <hr />
        <UnControlled />
      </div>
    </React.Fragment>
  );
}
