import React, { Component } from "react";
import { Container, Poster, User, Wrapper, Title, Cover } from "./style";

export default class index extends Component {
  render() {
    const { user, title, view, time } = this.props.data;
    return (
      <Container>
        <Poster src={user.poster || "none"} />
        <Wrapper>
          <User src={user.img} />
          <Cover>
            <Title title="true">{title}</Title>
            <Title>{user.name}</Title>
            <Wrapper inline="true">
              <Title>{view}</Title>
              <Title>{time}</Title>
            </Wrapper>
          </Cover>
        </Wrapper>
      </Container>
    );
  }
}
