import React, { Component } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const list = [
  { id: 1, name: "jasurbek" },
  { id: 2, name: "eshmat" },
  { id: 3, name: "toshmat" },
  { id: 4, name: "gulmat" },
];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      data: list,
    };
  }

  render() {
    // const getRes = (value) => {
    //   this.setState({ login: value });
    // };
    const del = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data, res });
    };
    return (
      <React.StrictMode>
        {/* {this.state.login ? (
          <SignIn getRes={getRes} />
        ) : (
          <SignUp getRes={getRes} />
        )} */}
        <h1>List</h1>
        {this.state.data.map(({ id, name }) => {
          return (
            <h1>
              {id} {name} <button onClick={() => del(id)}>del</button>
            </h1>
          );
        })}
      </React.StrictMode>
    );
  }
}
