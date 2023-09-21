import React, { useRef } from "react";

export const index = () => {
  const loginRef = useRef();
  const pwRef = useRef();
  const onSave = () => {
    if (loginRef.current.value === "jasur" && pwRef.current.value === "1604") {
      localStorage.setItem("token", true);
    } else {
      localStorage.setItem("token", false);
    }
  };
  return (
    <React.Fragment>
      <h1>About</h1>
      <input type="text" ref={loginRef} placeholder="login" />
      <input type="text" ref={pwRef} placeholder="password" />
      <button onClick={onSave}>login</button>
    </React.Fragment>
  );
};

export default index;
