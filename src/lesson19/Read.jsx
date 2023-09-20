import React, { useState } from "react";

export default function Read() {
  const [house, setHouse] = useState({});
  const getData = () => {
    fetch("http://localhost:8080/api/v1/houses/me", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <React.Fragment>
      <h2>Read</h2>
      <button onClick={getData}>get data</button>
    </React.Fragment>
  );
}
