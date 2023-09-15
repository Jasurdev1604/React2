import React, { useEffect, useState } from "react";

export const Hooks = (props) => {
  const [count, setCount] = useState(props.count);
  useEffect(() => {
    setCount(props.count);
  }, [props.count]);
  return (
    <React.Fragment>
      <h1>Hooks Count:{count}</h1>
    </React.Fragment>
  );
};
