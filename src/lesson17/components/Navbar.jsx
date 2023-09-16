import React, { useState, useMemo, useCallback } from "react";
import Body from "./Body";

export default function Navbar() {
  console.log("navbar render");
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return { name: "jasurbek" };
  }, []);

  const dataCall = useCallback(() => {
    return { name: "jasurbek" };
  }, []);

  return (
    <React.Fragment>
      <h1>Navbar</h1>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <hr />
      <Body data={data} dataCall={dataCall} />
    </React.Fragment>
  );
}
