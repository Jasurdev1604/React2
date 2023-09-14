import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  gap: 15px;
  margin: 30px;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 15px;
  height: 500px;
`;

export default class index extends Component {
  render() {
    return (
      <React.StrictMode>
        <Container>
          <h1>SignUp</h1>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="surname" />
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button onClick={() => this.props.getRes(true)}>SignIn</button>
        </Container>
      </React.StrictMode>
    );
  }
}
