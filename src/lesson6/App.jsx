import React, { Component } from "react";
import {
  Container,
  Title,
  Box,
  Desc,
  Button,
  ActiveButton,
  Rotate,
} from "./style.js";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
  }
`;

export default class App extends Component {
  state = {
    light: false,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
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
          <Container>
            <Button>Parent Button</Button>
            <ActiveButton>Child Button</ActiveButton>
            <Rotate>Rotate</Rotate>
            <button onClick={() => this.setState({ light: !this.state.light })}>
              change theme
            </button>
          </Container>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}
