import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return state + 1;
      break;
    case "minus":
      return state - 1;
    case "bymount":
      return state + action.payload;
    default:
      return state;
      break;
  }
};

const initialState = 0;

const Index = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <h1>useReducer</h1>
      <h1>Counter :{counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>minus</button>
      <button onClick={() => dispatch({ type: "bymount", payload: 20 })}>
        20
      </button>
      <button onClick={() => dispatch({ type: "bymount", payload: 100 })}>
        100
      </button>
    </React.Fragment>
  );
};

export default Index;
