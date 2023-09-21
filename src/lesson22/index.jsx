import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { navbar } from "./utils/navbar";

export default function index() {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map(
              ({ id, element, path, isPrivate }) =>
                isPrivate && (
                  <Route
                    key={id}
                    path={path}
                    element={token ? element : <Navigate to={"/login"} />}
                  />
                )
            )}
            {navbar.map(
              ({ id, element, path, isPrivate }) =>
                !isPrivate && <Route key={id} path={path} element={element} />
            )}
          </Route>
          <Route path={"*"} element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
