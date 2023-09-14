import React, { Component } from "react";
import { Container } from "./style";
import Card from "./Card";

export default class index extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.StrictMode>
        <Container>
          {data.length ? (
            data.map(({ user, title, view, time, id }) => (
              <Card key={id} data={{ user, title, view, time }} />
            ))
          ) : (
            <h1>none</h1>
          )}
        </Container>
      </React.StrictMode>
    );
  }
}
