import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function index() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </React.Fragment>
  );
}
