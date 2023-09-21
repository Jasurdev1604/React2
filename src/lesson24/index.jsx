import React, { useState } from "react";

export default function index() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(`${counter} toq ham juft ham emas`);
  const plus = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      setCounter(counter + 1);
      setState((counter + 1) % 2 ? "toq" : "juft");
    });
  };
  console.log("re-render");
  return (
    <React.Fragment>
      <h1>React 18 version</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={plus}>plus</button>
      <h2>
        {counter} {state} son
      </h2>
    </React.Fragment>
  );
}
