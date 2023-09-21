import React from "react";
import UpdatedWith from "./withCounter";

function Counter({ count, setCount }) {
  return (
    <React.Fragment>
      <h1>Counter</h1>
      <button onClick={setCount}>click {count} times</button>
    </React.Fragment>
  );
}

export default UpdatedWith(Counter);
