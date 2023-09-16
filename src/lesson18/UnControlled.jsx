import React, { useRef } from "react";

export const UnControlled = () => {
  const nameRef = useRef();
  return (
    <React.Fragment>
      <h1>UnControlled</h1>
      <input type="text" ref={nameRef} onChange={onchange} />
      <button onClick={() => alert(nameRef.current.value)}>click</button>
    </React.Fragment>
  );
};

export default UnControlled;
