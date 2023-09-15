import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "./context";

const Navbar = () => {
  const data = useContext(StudentContext);
  return (
    <React.Fragment>
      <div
        style={{
          background: "blue",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1>length {data.length}</h1>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Info</h1>
        <h1>Contact</h1>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
