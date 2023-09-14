import React, { useState } from "react";

export default function Hooks() {
  //   const [count, setCount] = useState(0);
  const [data, setData] = useState({ count: 0, name: "jasurbek" });

  const onChage = ({ target: { value } }) => {
    setData({ ...data, name: value });
  };

  const plus = () => {
    setData({ ...data, count: data.count + 1 });
  };

  const minus = () => {
    setData({ ...data, count: data.count - 1 });
  };

  return (
    <React.StrictMode>
      <div style={{ flex: 1 }}>
        <h1>Hooks</h1>
        {/* <h2>Count:{count}</h2> */}
        <button onClick={() => setData({ ...data, count: data.count + 1 })}>
          plus
        </button>
        <button onClick={minus}>minus</button>
        <hr />
        <h1>Count:{data.count}</h1>
        <button onClick={""}>plus</button>
        <button onClick={""}>minus</button>
        <h1>Title: {data.name}</h1>
        <input type="text" placeholder="title" onChange={onChage} />
      </div>
    </React.StrictMode>
  );
}
