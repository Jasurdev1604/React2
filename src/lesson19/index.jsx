import React, { useEffect, useState } from "react";

export default function index() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setStudents(res));
  }, []);

  const [students, setStudents] = useState([]);
  return (
    <React.Fragment>
      <h1>Restful API</h1>
      <h1>Students List</h1>
      <ul>
        {students.map(({ id, name }) => (
          <li key={id}>
            {id} - {name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
