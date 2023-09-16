import React, { createContext, useState } from "react";

export const StudentsContext = createContext();

const StudentsList = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "jasurbek" },
    { id: 2, name: "eshmat" },
    { id: 3, name: "jasurbek" },
    { id: 4, name: "jasurbek" },
    { id: 5, name: "jasurbek" },
    { id: 6, name: "otelbayev" },
  ]);
  const onDelate = (id) => {
    let res = students.filter((v) => v.id !== id);
    setStudents(res);
  };
  return (
    <StudentsContext.Provider value={{ students, onDelate }}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsList;
