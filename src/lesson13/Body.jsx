import React, { useState, useContext } from "react";
import { StudentContext } from "./context";

const Body = () => {
  const data = useContext(StudentContext);
  const [students, setStudents] = useState(data);

  // useEffect(() => {
  //   setStudents(data);
  // }, [data]);

  const onDelete = (id) => {
    let res = students.filter((v) => v.id !== id);
    setStudents(res);
  };

  return (
    <React.Fragment>
      <div style={{ background: "coral" }}>
        <h1>Students List {students.length}</h1>
        {students.map(({ id, name, age }) => (
          <h1 key={id}>
            {id} {name} {age}{" "}
            <button onClick={() => onDelete(id)}>delete</button>
          </h1>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Body;
