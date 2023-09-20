import React, { useRef } from "react";

export default function Crud() {
  const emailRef = useRef();
  const pwRef = useRef();
  const onLogin = () => {
    fetch("http://localhost:8080/api/public/auth/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        email: emailRef?.current?.value,
        password: pwRef?.current?.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.authenticationToken));
  };
  return (
    <React.Fragment>
      <h1>Crud</h1>
      <hr />
      <h2>Login</h2>
      <input
        type="text"
        placeholder="email"
        defaultValue={"j@gmail.com"}
        ref={emailRef}
      />
      <input
        type="text"
        placeholder="password"
        defaultValue={"jasur"}
        ref={pwRef}
      />
      <button onClick={onLogin}>login</button>
      <button onClick={() => localStorage.clear()}>log out</button>
    </React.Fragment>
  );
}
