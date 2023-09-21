import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const index = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "jasurbek" },
    { id: 2, name: "eshmat" },
    { id: 3, name: "toshmat" },
    { id: 4, name: "xolmat" },
    { id: 5, name: "gulmat" },
    { id: 6, name: "pulmat" },
  ]);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>Home</h1>
      {students.map(({ id, name }) => {
        return (
          <h2 key={id}>
            {id} - {name}
            <button onClick={() => navigate(`/home/${id}`)}>get</button>
          </h2>
        );
      })}
    </React.Fragment>
  );
};

export default index;
