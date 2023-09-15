import React, { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentsList = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "eshmat", age: 20 },
    { id: 2, name: "toshmat", age: 20 },
    { id: 3, name: "xolmat", age: 20 },
    { id: 4, name: "gulmat", age: 20 },
    { id: 5, name: "pulmat", age: 20 },
  ]);
  return (
    <StudentContext.Provider value={students}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentsList;
