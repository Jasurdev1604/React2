import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { navbar } from "./utils/navbar";

export default function index() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route
              path={"/"}
              exact={"true"}
              element={<Navigate to={"/home"} />}
            />
            {navbar.map(({ id, element, path }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
          <Route path={"*"} element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
