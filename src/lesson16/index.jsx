import React, { useState } from "react";

export default function index() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || { data: 0 }
  );
  const plus = () => {
    setCount({ data: count.data + 1 });
    localStorage.setItem("count", JSON.stringify({ data: count.data + 1 }));
  };
  const minus = () => {
    setCount({ data: count.data - 1 });
    localStorage.setItem("count", JSON.stringify({ data: count.data - 1 }));
  };
  const clear = () => {
    localStorage.setItem("count", JSON.stringify({ data: 0 }));
    setCount({ data: 0 });
  };
  return (
    <React.Fragment>
      <h1>LocalStorage</h1>
      <h1>Count:{count.data}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={clear}>clear</button>
    </React.Fragment>
  );
}
