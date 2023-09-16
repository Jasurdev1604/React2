import React from "react";
import StudentsList from "./context";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function Index() {
  return (
    <React.StrictMode>
      <StudentsList>
        <Navbar />
        <Body />
      </StudentsList>
    </React.StrictMode>
  );
}
