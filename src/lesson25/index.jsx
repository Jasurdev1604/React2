import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";

const Home = React.lazy(() => import("./Home"));

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #aeaeae;
  height: 65px;
  color: #fff;
`;
export default function index() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <h1>Portals</h1>
        <Container>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </Container>
        <div>
          <Routes>
            <Route
              path={"/home"}
              element={
                <React.Suspense fallback={<h1>loading...</h1>}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}
