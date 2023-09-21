import React from "react";
import { useNavigate } from "react-router-dom";

export const index = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <h1>Contact</h1>
      <h1>
        <button
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("token");
          }}
        >
          log out
        </button>
      </h1>
    </React.Fragment>
  );
};

export default index;
