import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: calc(100vh - 56px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0;
`;

export const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ title }) => (title ? "25px" : "16px")};
  line-height: 20px;
  color: #fff;
  margin-left: 24px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
