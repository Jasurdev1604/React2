import React from "react";
import "./index.css";

export const App = (e) => {
  const { img, title } = e.data;
  console.log(img);
  return (
    <React.StrictMode>
      {/* <div className="container">
        <img src={img} alt="" />
        <h3>{title}</h3>
      </div> */}
    </React.StrictMode>
  );
};

export default App;
