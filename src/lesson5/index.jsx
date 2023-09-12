import React, { Component } from "react";
import { students } from "./mock";
import "./index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      name: "",
      surname: "",
      search: "id",
      active: null,
    };
  }
  render() {
    const onDel = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    const onchange = ({ target: { value, placeholder } }) => {
      this.setState({ [placeholder]: value });
    };
    const onAdd = () => {
      let res = [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: this.state.name,
          surname: this.state.surname,
        },
      ];
      this.setState({ data: res, name: "", surname: "" });
    };
    const filter = ({ target: { value } }) => {
      let res = students.filter((v) =>
        `${v[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ data: res });
    };
    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };
    const onEdit = ({ id, name, surname }) => {
      this.setState({ active: { id, name, surname } });
    };
    return (
      <React.StrictMode>
        <input type="text" onChange={filter} placeholder="search" />
        <select name="" onChange={onSelect} id="">
          <option value="id">id</option>
          <option value="name">name</option>
          <option value="surname">surname</option>
        </select>
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>
                <input
                  onChange={onchange}
                  value={this.state.name}
                  type="text"
                  placeholder="name"
                />
              </th>
              <th>
                <input
                  onChange={onchange}
                  value={this.state.surname}
                  type="text"
                  placeholder="surname"
                />
              </th>
              <th colSpan={2}>
                <button onClick={onAdd}>add</button>
              </th>
            </tr>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map((e) => {
                const { id, name, surname } = e;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>
                      <button onClick={() => onDel(id)}>delete</button>
                    </td>
                    <td>
                      <button onClick={() => onEdit(id, name, surname)}>
                        edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5}>no data</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.StrictMode>
    );
  }
}
