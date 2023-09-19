import React, { useEffect, useState } from "react";

export default function index() {
  const getUser = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${id ? id : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getUser().then((res) => setStudents(res));
  }, []);

  const getInfo = (id) => {
    getUser(id).then((res) => setSelected(res));
  };

  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setSetpassword] = useState("");

  const onLogin = () => {
    fetch("http://localhost:8080/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login, password }),
    }).then((res) => res.json());
  };

  const onChangeL = ({ target: { value, placeholder } }) => {
    setLogin(value);
  };
  const onChangeP = ({ target: { value, placeholder } }) => {
    setSetpassword(value);
  };
  return (
    <React.Fragment>
      <h1>Restful API</h1>
      <h1>Students List</h1>
      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <ul>
          {students.map(({ id, name }) => (
            <li key={id}>
              {id} - {name} <button onClick={() => getInfo(id)}>GET</button>
            </li>
          ))}
        </ul>
        <hr />
        <div>
          <h2>{selected?.id}</h2>
          <h2>{selected?.name}</h2>
          <h2>{selected?.email}</h2>
          <h2>{selected?.username}</h2>
        </div>
      </div>
      <hr />
      <input type="text" onChange={onChangeL} placeholder="login" />
      <input type="text" onChange={onChangeP} placeholder="password" />
      <button onClick={onLogin}>login</button>
    </React.Fragment>
  );
}
