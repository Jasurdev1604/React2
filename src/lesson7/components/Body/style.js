import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #000000;
  height: calc(100vh - 56px);
  overflow-y: auto;
  flex: 1;
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
