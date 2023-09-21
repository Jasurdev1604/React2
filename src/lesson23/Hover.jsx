import React from "react";
import UpdatedWith from "./withCounter";

function Hover({ count, setCount }) {
  return (
    <React.Fragment>
      <h1>Hover</h1>
      <button onMouseOver={setCount}> hover {count} times</button>
    </React.Fragment>
  );
}

export default UpdatedWith(Hover);
