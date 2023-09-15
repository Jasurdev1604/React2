import React, { Component } from "react";
import { Hooks } from "./Hooks";

export default class Class extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>Class count :{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
        <hr />
        <Hooks count={this.state.count} />
      </React.Fragment>
    );
  }
}
