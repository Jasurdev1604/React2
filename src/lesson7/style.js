import styled from "styled-components";
import { ReactComponent as burger } from "./assets/icons/burger.svg";
import { ReactComponent as search } from "./assets/icons/search.svg";

export const Container = styled.div`
  background: #212121;
  color: #fff;
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  height: 100vh;
  padding: ${({ flex }) => !flex && "0 30px"};
`;

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  display: flex;
  flex: 1;
  align-items: center;
  border: 1px solid blue;
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
`;

Icons.Search = styled(search)`
  width: 24px;
  height: 24px;
  padding: 0 20px;
`;

Icons.Logo = styled.img``;

export const Input = styled.input`
  height: 40px;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px 0 0 2px;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  max-width: 500px;
  width: 100%;
  padding-left: 10px;
`;
