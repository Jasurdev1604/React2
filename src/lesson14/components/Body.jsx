import React, { useContext, useState } from "react";
import { StudentsContext } from "../context";

export default function Body() {
  const data = useContext(StudentsContext);
  console.log(data.students);
  return (
    <React.StrictMode>
      <h1>StudentsList {data.students.length}</h1>
      <div>
        {data.students.map(({ id, name }) => (
          <h1 key={id}>
            {id} {name}
            <button onClick={() => data.onDelate(id)}>del</button>
          </h1>
        ))}
      </div>
    </React.StrictMode>
  );
}
