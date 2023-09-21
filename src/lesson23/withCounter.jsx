import React, { useState } from "react";

const UpdatedWith = (Component) => {
  const Updated = () => {
    const [count, setCount] = useState(0);
    const inc = () => {
      setCount(count + 1);
    };
    return <Component count={count} setCount={inc} />;
  };
  return Updated;
};

export default UpdatedWith;
