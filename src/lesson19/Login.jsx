import React, { useRef } from "react";

export default function Crud() {
  const getUsers = () => {
    return fetch(`http://localhost:8080/api/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.authenticationToken);
      });
  };

  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <React.Fragment>
      <h2>Login</h2>
      <div>
        <span>
          email{" "}
          <input
            ref={emailRef}
            defaultValue={"jasurdev1604@gmail.com"}
            type="text"
          />
        </span>
        <span>
          passoword{" "}
          <input
            ref={passwordRef}
            defaultValue={"Jasurbek2004"}
            type="password"
          />
        </span>
        <button onClick={getUsers}>login</button>
        <button onClick={() => localStorage.clear()}>logout</button>
      </div>
    </React.Fragment>
  );
}
