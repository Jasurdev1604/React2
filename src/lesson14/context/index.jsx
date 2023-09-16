import React from "react";
import StudentsList from "./StudentsContext";

export default function Context({ children }) {
  return <StudentsList>{children}</StudentsList>;
}
