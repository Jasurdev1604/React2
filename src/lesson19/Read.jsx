import React, { useState } from "react";

export default function Read() {
  const [house, setHouse] = useState({});
  const getData = () => {
    fetch("http://localhost:8080/api/v1/categories/list")
      .then((res) => res.json())
      .then((res) => setHouse(res));
  };

  return (
    <React.Fragment>
      <h2>Read</h2>
      <button onClick={getData}>get data</button>
      {house?.data?.map(({ id, name }) => {
        return (
          <h3>
            {id} - {name}
          </h3>
        );
      })}
    </React.Fragment>
  );
}
