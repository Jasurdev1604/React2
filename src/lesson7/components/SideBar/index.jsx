import React, { Component } from "react";
import { Container, Wrapper, Title, ItemWrapper } from "./style";
import { sidebar } from "../../utils/sidebar.js";

export default class index extends Component {
  render() {
    return (
      <React.StrictMode>
        <Container>
          {sidebar.map(({ id, title, data }) => (
            <Wrapper key={id}>
              {title && <Title title="true">{title}</Title>}
              {data.map(({ Icon: Icons, title: subTitle }) => (
                <ItemWrapper key={id}>
                  <Icons />
                  <Title>{subTitle}</Title>
                </ItemWrapper>
              ))}
            </Wrapper>
          ))}
        </Container>
      </React.StrictMode>
    );
  }
}
