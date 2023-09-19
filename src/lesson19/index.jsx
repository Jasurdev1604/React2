import React, { useEffect, useRef, useState } from "react";
import Crud from "./Crud";

export default function index() {
  // const getUser = (id) => {
  //   return fetch(
  //     `https://jsonplaceholder.typicode.com/users/${id ? id : ""}`
  //   ).then((res) => res.json());
  // };

  // useEffect(() => {
  //   getUser().then((res) => setStudents(res));
  // }, []);

  // const getInfo = (id) => {
  //   getUser(id).then((res) => setSelected(res));
  // };

  // const [students, setStudents] = useState([]);
  // const [selected, setSelected] = useState([]);
  // const [house, setHouse] = useState([]);

  // const emailRef = useRef();
  // const pwRef = useRef();
  // const onLogin = () => {
  //   fetch("http://localhost:8080/api/public/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({
  //       email: emailRef.current.value,
  //       password: pwRef.current.value,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) =>
  //       localStorage.setItem("token", `Bearer ${res.authenticationToken}`)
  //     );
  // };

  // const getData = () => {
  //   fetch("http://localhost:8080/api/v1/houses")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  return (
    <React.Fragment>
      {/* <h1>Restful API</h1>
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
      <input
        type="text"
        ref={emailRef}
        value={"jasurdev1604@gmail.com"}
        placeholder="login"
      />
      <input
        type="text"
        ref={pwRef}
        value={"Jasurbek2004"}
        placeholder="password"
      />
      <button onClick={onLogin}>login</button>
      <hr />
      <button onClick={getData}>getData</button>
      <div></div> */}
      <Crud />
    </React.Fragment>
  );
}
