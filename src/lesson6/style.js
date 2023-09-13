import styled, { css, keyframes } from "styled-components";

const Container = styled("div")`
  background-color: coral;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
`;

const common = css`
  font-weight: 700;
  color: red;
  text-align: center;
  border: 1px solid blue;
  padding: 20px;
`;

const Title = styled.h1`
  ${common}
  font-size: 25px;
`;

const Desc = styled.p`
  ${common}
  font-size: 15px;
  background: ${({ left }) => (left ? "black" : "white")};
`;

const getSize = (a) => {
  switch (a.type) {
    case "small":
      return "200px";
      break;
    case "medium":
      return "300px";
      break;
    case "large":
      return "400px";
      break;
    default:
      return "200px";
      break;
  }
};

const Box = styled.div`
  background: ${(props) => props.bg};
  width: ${getSize};
  height: ${getSize};
  border: 2px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
`;

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
  background: cyan;
  border: 2px solid blue;
  animation: ${rotate} 0.1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, Title, Box, Desc, Button, ActiveButton, Rotate };
