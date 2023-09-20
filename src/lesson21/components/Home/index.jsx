import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function index() {
  const [studens, setStudents] = useState([
    { id: 1, name: "jasurbek" },
    { id: 2, name: "eshamt" },
    { id: 3, name: "toshmat" },
    { id: 4, name: "xolmat" },
    { id: 5, name: "gukmat" },
    { id: 6, name: "pulmat" },
  ]);
  const [selected, setSelected] = useState({});

  const history = useHistory();

  console.log(history);

  return (
    <React.Fragment>
      <h1>Home</h1>
      {studens.map(({ id, name }) => {
        return (
          <h1>
            {id} - {name}{" "}
            <button onClick={() => history.push(`/home/:${id}`)}>select</button>
          </h1>
        );
      })}
      <h1>
        {selected?.id}
        {selected?.name}
      </h1>
    </React.Fragment>
  );
}
