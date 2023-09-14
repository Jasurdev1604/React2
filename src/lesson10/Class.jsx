import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <React.StrictMode>
        <div style={{ flex: 1 }}>
          <h1>Class</h1>
          <h2>Count:{this.state.count}</h2>
          <button onClick={plus}>plus</button>
          <button onClick={minus}>minus</button>
        </div>
      </React.StrictMode>
    );
  }
}
