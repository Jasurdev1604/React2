import React, { useState } from "react";

export const Controlled = () => {
  const [name, setName] = useState("");
  const onchange = ({ target: { value } }) => {
    setName(value);
  };
  return (
    <React.Fragment>
      <h1>Controlled: {name}</h1>
      <input type="text" onChange={onchange} />
    </React.Fragment>
  );
};

export default Controlled;
