import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Link = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
`;

export default function index() {
  return (
    <React.Fragment>
      <Container>
        <Link>Logo</Link>
        <Link>Home</Link>
        <Link>Templates</Link>
        <Link>Elements</Link>
        <Link>Contact</Link>
      </Container>
    </React.Fragment>
  );
}
