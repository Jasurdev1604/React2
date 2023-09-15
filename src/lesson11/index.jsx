import React, { useEffect, useState } from "react";
import Class from "./Class";

const Index = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("jasurbek");
  const onChange = ({ target: { value } }) => {
    setName(value);
  };
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  //case 1

  useEffect(() => {
    console.log("case 1");
  });

  //case 2

  useEffect(() => {
    console.log("case 2");
  }, []);

  //case 3

  useEffect(() => {
    console.log("case 3");
  }, [name]);

  return (
    <React.StrictMode>
      <Class />
      {/* <hr /> */}
      {/* <h1>Count:{count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <h1>Name:{name}</h1>
      <input type="text" placeholder="name" onChange={onChange} /> */}
    </React.StrictMode>
  );
};

export default Index;
