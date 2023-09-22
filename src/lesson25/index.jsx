import React, { Profiler } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import { Portal } from "./Portal";

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
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    commitTime,
    startTime,
    interactions
  ) => {
    console.table({
      id,
      phase,
      actualDuration,
      baseDuration,
      commitTime,
      startTime,
      interactions,
    });
  };

  return (
    <React.Fragment>
      <Profiler id="modal" onRender={onRender}>
        <BrowserRouter>
          <h1>Portals</h1>
          <Portal />
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
      </Profiler>
    </React.Fragment>
  );
}
