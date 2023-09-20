import React, { useState } from "react";

export default function Read() {
  const [data, setData] = useState({});
  const getData = () => {
    fetch("http://localhost:8080/api/v1/houses/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const onDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/houses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          getData();
        }
      });
  };

  return (
    <React.Fragment>
      <button onClick={getData}>get Data</button>
      {data?.data?.map(({ id, address, city, country, description }) => {
        return (
          <div key={id}>
            <h3>id:{id}</h3>
            <h3>address: {address}</h3>
            <h3>city: {city}</h3>
            <h3>country: {country}</h3>
            <h3>description: {description}</h3>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
