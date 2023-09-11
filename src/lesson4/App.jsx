import React, { Component } from "react";
import { students } from "./mock";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "jasurbek",
      surname: "otelbayev",
      data: students,
    };
  }
  render() {
    const onChange = ({ target: { value, placeholder } }) => {
      this.setState({ [placeholder]: value });
    };

    const onFilter = (e) => {
      let res = students.filter((v) => v.name.includes(e.target.value));
      this.setState({ data: res });
    };

    const onDel = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    return (
      <React.StrictMode>
        <h1>Name: {this.state.name}</h1>
        <h1>Surname: {this.state.surname}</h1>
        <input type="text" placeholder="name" onChange={(e) => onChange(e)} />
        <input type="text" placeholder="surname" onChange={onChange} />
        <hr />
        <input type="text" placeholder="filter" onChange={onFilter} />
        {this.state.data.map((e) => {
          const { id, name, status } = e;
          return (
            <h1 key={id}>
              {id} : {name} - {status}{" "}
              <button onClick={() => onDel(id)}>delete</button>
            </h1>
          );
        })}
      </React.StrictMode>
    );
  }
}
