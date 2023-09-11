import "./index.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "",
    };
  }
  render() {
    const plus = () => {
      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      }
    };

    const minus = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };

    const onChange = (e) => {
      this.setState({ title: e.target.value });
    };

    const onSelect = (e) => {
      console.log(e.target.value);
    };

    const onCheck = (e) => {
      console.log(e.target.checked);
    };
    return (
      <React.StrictMode>
        <h1>State: {this.state.count}</h1>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
        <br />
        <h1>Title:{this.state.title}</h1>
        <input type="text" placeholder="text" onChange={onChange} />
        <br />
        <select onChange={onSelect} name="" id="">
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="kz">kz</option>
        </select>
        <br />
        <input type="checkbox" onChange={onCheck} />
      </React.StrictMode>
    );
  }
}

export default App;
