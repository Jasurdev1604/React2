import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Templates from "./components/Templates";
import Contact from "./components/Contact";

export default function index() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path={"/"} exact element={<Navigate to={"/home"} />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/templates"} element={<Templates />} />
          </Route>
          <Route path={"*"} element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
