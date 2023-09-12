import React, { Component } from "react";
import { students } from "./mock.js";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      name: "",
      surname: "",
      search: "id",
      selected: null,
    };
  }
  render() {
    const onChange = ({ target: { value, placeholder } }) => {
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
    const onFilter = ({ target: { value } }) => {
      let res = students.filter((v) =>
        `${v[this.state.search]}`.includes(value)
      );
      this.setState({ data: res });
    };
    const onSelected = ({ target: { value } }) => {
      this.setState({ search: value });
    };
    const onEdit = (id, name, surname) => {
      this.setState({ selected: { id, name, surname } });
    };
    const onSaveChange = ({ target: { value, name } }) => {
      this.setState({ selected: { ...this.state.selected, [name]: value } });
    };
    const onSave = (id) => {
      let res = this.state.data.map((v) =>
        v.id === id ? this.state.selected : v
      );
      this.setState({ data: res, selected: null });
    };
    const onDel = (id) => {
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    return (
      <React.StrictMode>
        <input type="text" placeholder="search" onChange={onFilter} />
        <select name="" id="" onChange={onSelected}>
          <option value="id">id</option>
          <option value="name">name</option>
          <option value="surname">surname</option>
        </select>
        <table border={1}>
          <thead>
            <tr>
              <th></th>
              <th>
                <input type="text" onChange={onChange} placeholder="name" />
              </th>
              <th>
                <input type="text" onChange={onChange} placeholder="surname" />
              </th>
              <th colSpan={2}>
                <button onClick={onAdd}>add</button>
              </th>
            </tr>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Surname</th>
              <th>del</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map((e) => {
                const { id, name, surname } = e;
                return (
                  <tr key={id} style={{ textAlign: "center" }}>
                    <td>{id}</td>
                    <td>
                      {id === this.state?.selected?.id ? (
                        <input
                          type="text"
                          name="name"
                          defaultValue={name}
                          onChange={onSaveChange}
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {id === this.state?.selected?.id ? (
                        <input
                          type="text"
                          name="surname"
                          defaultValue={surname}
                          onChange={onSaveChange}
                        />
                      ) : (
                        surname
                      )}
                    </td>
                    <td>
                      <button onClick={() => onDel(id)}>del</button>
                    </td>
                    <td>
                      {id === this.state?.selected?.id ? (
                        <>
                          <button onClick={() => onSave(id)}>save</button>
                          <button
                            onClick={() => this.setState({ selected: null })}
                          >
                            cancle
                          </button>
                        </>
                      ) : (
                        <button onClick={() => onEdit(id, name, surname)}>
                          edit
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td style={{ textAlign: "center" }} colSpan={5}>
                  NO DATA
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </React.StrictMode>
    );
  }
}
