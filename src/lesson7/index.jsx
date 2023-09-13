import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import { Container, Wrapper, Category, Icons, Input } from "./style";
import logo from "./assets/imgs/logo.png";

export default class index extends Component {
  render() {
    return (
      <React.StrictMode>
        <Container>
          <Wrapper>
            <Category>
              <Icons.Burger />
              <Icons.Logo src={logo} />
            </Category>
            <Category>
              <Input placeholder="search" />
              <Icons.Search />
            </Category>
            <Category>Uchinchi</Category>
          </Wrapper>
          <Container flex>
            <SideBar />
            <Body />
          </Container>
        </Container>
      </React.StrictMode>
    );
  }
}
