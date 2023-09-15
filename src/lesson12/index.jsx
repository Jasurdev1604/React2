import React, { useReducer, useState } from "react";

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

  const [btn, setBtn] = useState(1);

  const onSelect = ({ target: { value } }) => {
    setBtn(value);
  };

  return (
    <React.Fragment>
      <h1>useReducer</h1>
      <h1>Counter :{counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>minus</button>
      <button onClick={() => dispatch({ type: "bymount", payload: 20 })}>
        20
      </button>
      <select onChange={onSelect}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        onClick={() => dispatch({ type: "bymount", payload: Number(btn) })}
      >
        {btn} ga orttirish
      </button>
    </React.Fragment>
  );
};

export default Index;
