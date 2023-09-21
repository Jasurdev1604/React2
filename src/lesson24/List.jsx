import React, { useDeferredValue, useEffect, useId, useMemo } from "react";

export const List = ({ value }) => {
  const id = useId();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    );
  });

  //   const defValue = useDeferredValue(value);

  //   const list = useMemo(() => {
  //     let l = [];
  //     for (let i = 0; i < 2000; i++) {
  //       l.push(`${defValue}`);
  //     }
  //     return l;
  //   }, [defValue]);

  //   const isPending = value !== defValue;

  //   return isPending ? <h1>loading</h1> : list;

  return <h1> {id} Data loading</h1>;
};

export default List;
