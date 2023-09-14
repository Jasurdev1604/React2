import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  /* height: 250px; */
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-left: 5px;
  border-radius: 3px;
  background: #212121;
`;

export const Poster = styled.img`
  width: 100%;
  height: 150px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const User = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ inline }) => !inline && "space-evenly"};
  gap: ${({ inline }) => inline && "10px"};
`;

export const Title = styled.div`
  font-size: ${({ title }) => (title ? "20px" : "16px")};
  color: ${({ title }) => (title ? "#fff" : "rgba(255,255,255,0.5)")};
`;

export const Cover = styled.div`
  padding: 0 10px 10px 10px;
`;
