//! 12-dars
// 	- useReducer -> contextAPI bilan birgalikda redux ni ornini bosadi

import { useReducer } from "react";

// const [counter , dispatch] = useReducer(callback(count, state) , initialState)

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

const [counter, dispatch] = useReducer(reducer, initialState);

{
  /* <h1>Counter :{counter}</h1>
<button onClick={() => dispatch({ type: "plus" })}>plus</button>
<button onClick={() => dispatch({ type: "minus" })}>minus</button>
<button onClick={() => dispatch({ type: "bymount", payload: 20 })}> */
}
