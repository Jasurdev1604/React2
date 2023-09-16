import React, { createContext, useReducer } from "react";

export const CounterContext = createContext();

const CounterC = ({ children }) => {
  const [counter, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <CounterContext.Provider value={[counter, dispatch]}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterC;
