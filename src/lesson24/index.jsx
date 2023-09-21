import React, { Suspense, useState, useTransition } from "react";
// import { flushSync } from "react-dom";
const List = React.lazy(() => import("./List"));

export default function index() {
  // const [counter, setCounter] = useState(0);
  // const [state, setState] = useState(`${counter} toq ham juft ham emas`);
  // const plus = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     flushSync(() => {
  //       setCounter(counter + 1);
  //     });
  //     flushSync(() => {
  //       setState((counter + 1) % 2 ? "toq" : "juft");
  //     });
  //   });
  // };

  const [value, setValue] = useState("");

  // const [list, setList] = useState([]);

  // const [isPending, startTransition] = useTransition();

  const onChange = ({ target: { value } }) => {
    setValue(value);
    // startTransition(() => {
    //   getList(value);
    // });
  };

  // const getList = (value) => {
  //   let l = [];
  //   for (let i = 0; i < 2000; i++) {
  //     l.push(`${i} - ${value}`);
  //   }
  //   setList(l);
  // };
  return (
    <React.Fragment>
      {/* <h1>React 18 version</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={plus}>plus</button>
      <h2>
        {counter} {state} son
      </h2> */}
      <input type="text" value={value} onChange={onChange} />
      {/* <List value={value} /> */}
      {/* {isPending ? (
        <h1>...loading</h1>
      ) : (
        list.map((e) => {
          return <h1>{e}</h1>;
        })
      )} */}

      <Suspense fallback={<h1>loading</h1>}>
        <List />
      </Suspense>
    </React.Fragment>
  );
}
