import React, { useContext } from "react";
import { StudentsContext } from "../context";

export default function Navbar() {
  const data = useContext(StudentsContext);
  return (
    <React.StrictMode>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "coral",
          height: "50px",
        }}
      >
        <h1>Home {data.students.length}</h1>
        <h1>info</h1>
        <h1>about</h1>
        <h1>contact</h1>
      </div>
    </React.StrictMode>
  );
}
