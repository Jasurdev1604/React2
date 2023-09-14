import React, { Component } from "react";
import { Container } from "./style";
import Card from "./Card";
import { data } from "../../utils/mock";

export default class index extends Component {
  render() {
    return (
      <React.StrictMode>
        <Container>
          {data.map(({ user, title, view, time }) => (
            <Card user={user} all={{ title, view, time }} />
          ))}
        </Container>
      </React.StrictMode>
    );
  }
}
