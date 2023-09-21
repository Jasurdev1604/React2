import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar.js";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  background-color: black;
`;

const Link = styled(NavLink)`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: coral;
  }
`;

export const index = () => {
  return (
    <React.Fragment>
      <Container>
        {navbar.map(({ id, title, path }) => {
          return (
            <Link key={id} to={path}>
              {title}
            </Link>
          );
        })}
      </Container>
      <Outlet />
    </React.Fragment>
  );
};

export default index;
