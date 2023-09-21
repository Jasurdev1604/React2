import React, { useDeferredValue, useMemo } from "react";

export const List = ({ value }) => {
  const defValue = useDeferredValue(value);

  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 2000; i++) {
      l.push(`${defValue}`);
    }
    return l;
  }, [defValue]);

  const isPending = value !== defValue;

  return isPending ? <h1>loading</h1> : list;
};

export default List;
