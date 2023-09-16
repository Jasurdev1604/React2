import React, { memo } from "react";

function Body({ data, dataCall }) {
  console.log("body render");
  return (
    <React.Fragment>
      <h1>Body</h1>
      <h2>{data.name}</h2>
      <h2>{dataCall().name}</h2>
    </React.Fragment>
  );
}

export default memo(Body);
