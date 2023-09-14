import React, { useState } from "react";
import Class from "./Class";
import Hooks from "./Hooks";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const index = () => {
  const [data, setData] = useState({
    count: 0,
    title: "jasurbek",
  });

  const onchange = ({ target: { value } }) => {
    setData({ ...data, title: value });
  };

  const plus = () => {
    setData({ ...data, count: data.count + 1 });
  };

  const minus = () => {
    setData({ ...data, count: data.count - 1 });
  };

  return (
    <React.StrictMode>
      {/* <Container> */}
      {/* <Class />
        <hr />
        <Hooks /> */}
      {/* </Container> */}
      <h1>Count:{data.count}</h1>
      <h1>Title: {data.title}</h1>
      <input type="text" placeholder="title" onChange={onchange} />
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </React.StrictMode>
  );
};

export default index;
