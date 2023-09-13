import React, { Component } from "react";
import { Container, Title, Box, Desc } from "./style.js";

export default class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Container>
          <Box bg="red" type="small">
            Small
          </Box>
          <Box bg="yellow" type="medium">
            Medium
          </Box>
          <Box bg="brown" type="large">
            Large
          </Box>
        </Container>
        <Container>
          <Title>Styled Components</Title>
          <Desc left>Description</Desc>
          <Desc>Description</Desc>
        </Container>
      </React.StrictMode>
    );
  }
}
