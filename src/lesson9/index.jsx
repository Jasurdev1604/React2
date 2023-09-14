import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    //birinchi rendrden oldin yuradi
    console.log("this.componentWillMount");
  }

  componentDidMount() {
    //birinchi renderdan keyin
    console.log("this.componentDidMount");
  }

  componentWillReceiveProps() {
    //child parnetdan prop olgan payda yuradi
    console.log("this.componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    //componentni updat quilish yoki qilmaslilni
    console.log("this.shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    //renderdan oldin va prop kelishidan keyin
    console.log("this.componentWillUpdate");
  }

  componentDidUpdate() {
    //component re render bolgandan ketin ishlaydi
    console.log("this.componentDidUpdate");
  }

  componentWillUnmount() {
    //DOM elementi ozgarishida keyin
    console.log(this.componentWillUnmount);
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }

  minus() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log("render");

    return (
      <React.StrictMode>
        <h1>React Lifecycles and Binding</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.plus.bind(this)}>plus</button>
        <button onClick={() => this.minus()}>minus</button>
      </React.StrictMode>
    );
  }
}
