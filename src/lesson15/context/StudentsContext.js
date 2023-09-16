import React, { createContext, useContext, useState } from "react";

export const StudentsContext = createContext();

const StudentsList = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "none", age: 19 },
    { id: 2, name: "age", age: 19 },
    { id: 3, name: "hhh", age: 19 },
    { id: 4, name: "ppp", age: 19 },
    { id: 5, name: "r", age: 19 },
  ]);
  return (
    <StudentsContext.Provider value={students}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsList;
