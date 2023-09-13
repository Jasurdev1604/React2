import styled, { css } from "styled-components";

const Container = styled("div")`
  background-color: coral;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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

export { Container, Title, Box, Desc };
