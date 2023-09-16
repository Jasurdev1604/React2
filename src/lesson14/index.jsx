import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Context from "./context";

export default function Index() {
  return (
    <React.StrictMode>
      <Context>
        <Navbar />
        <Body />
      </Context>
    </React.StrictMode>
  );
}
