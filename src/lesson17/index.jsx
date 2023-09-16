import React from "react";
import Navbar from "./components/Navbar";

export default function index() {
  console.log("root render");
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}
