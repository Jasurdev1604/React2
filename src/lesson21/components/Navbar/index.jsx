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

const Link = styled(NavLink)`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  &.active {
    color: coral;
  }
`;

export default function index() {
  return (
    <React.Fragment>
      <Container>
        <Link to={"/"} exact>
          Logo
        </Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/templates"}>Templates</Link>
        <Link to={"/info"}>Info</Link>
        <Link to={"/contacts"}>Contact</Link>
      </Container>
    </React.Fragment>
  );
}
