import React, { Component } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  render() {
    const getRes = (value) => {
      this.setState({ login: value });
    };
    return (
      <React.StrictMode>
        {this.state.login ? (
          <SignIn getRes={getRes} />
        ) : (
          <SignUp getRes={getRes} />
        )}
      </React.StrictMode>
    );
  }
}
