import React from "react";
import AntDesign from "./AntDesign";
import MaterialUI from "./MaterialUI";

export default function index() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
        }}
      >
        <AntDesign />
        <MaterialUI />
      </div>
    </React.Fragment>
  );
}
