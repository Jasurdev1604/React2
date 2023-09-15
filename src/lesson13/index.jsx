import React, { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import StudentsList from "./context";

const index = () => {
  return (
    <React.Fragment>
      <StudentsList>
        <Navbar />
        <Body />
      </StudentsList>
    </React.Fragment>
  );
};

export default index;
