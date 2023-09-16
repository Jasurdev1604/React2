import React, { useContext } from "react";
import { CounterContext } from "../context/context";

export default function Navbar() {
  const [counter, dispatch] = useContext(CounterContext);
  return (
    <React.Fragment>
      <h1>Count:{counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>minus</button>
    </React.Fragment>
  );
}
