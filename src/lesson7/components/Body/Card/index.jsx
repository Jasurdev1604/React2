import React, { Component } from "react";
import { Container, Poster, User, Wrapper, Title, Cover } from "./style";

export default class index extends Component {
  render() {
    const { poster, img, name } = this.props.user;
    const { title, view, time } = this.props.all;
    return (
      <Container>
        <Poster src={poster} />
        <Wrapper>
          <User src={img} />
          <Cover>
            <Title title>{title}</Title>
            <Title>{name}</Title>
            <Wrapper inline>
              <Title>{view}</Title>
              <Title>{time}</Title>
            </Wrapper>
          </Cover>
        </Wrapper>
      </Container>
    );
  }
}
