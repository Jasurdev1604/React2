//! 6-dars
// 	- styled-components
// 	- { css }
// 	- props
// 	- function call
// 	- inheritance
// 	- keyframse -> animation
// 	- prototypes
// 	- project
// 	- theme

//!styled-components => js fileda css style yozish

//!{css} common => takrorlanuvchi stylelarni qayta qayta yozmasdan ishlatish
import styled, { css } from "styled-components";
const common = css`
  /* umumiy style */
`;

//!props => bir xil componentlarga prop orqali har hil style berish mumkin
{
  /* <Box type="large" bg="dark" left>
  box
</Box>; */
}

const Box = styled.div`
  background: ${(props) => props.bg};
  width: ${(props) => {
    switch (props.type) {
      case "large":
        return "500px";
        break;

      default:
        return "100px";
        break;
    }
  }};
  color: ${({ left }) => (left ? "red" : "#fff")};
`;

//!inheritance -> Componentlarning stylisidan meros oladi yani hamma stylelarni kochirib oladi

const Button = styled.div`
  width: 200px;
  height: 40px;
  background: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
    opacity: 0.7;
  }
  border-radius: 5px;
`;

const ActiveButton = styled(Button)`
  height: 50px;
  background: blue;
`;

{
  /* <Button>Parent Button</Button>
<ActiveButton>Child Button</ActiveButton> */
}

//!keyframse -> animation

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  } to{
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

<Rotate>Rotate</Rotate>;

//!theme

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
  }
`;

state = {
  light: false,
};

const theme = {
  bg: this.state.light ? "white" : "black",
  cl: this.state.light ? "black" : "white",
};

<>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <button onClick={() => this.setState({ light: !this.state.light })}>
      change theme
    </button>
  </ThemeProvider>
</>;
