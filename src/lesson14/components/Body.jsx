import React from "react";
import { Student } from "../context/StudentsContext";

export default function Body() {
  const data = Student();
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
