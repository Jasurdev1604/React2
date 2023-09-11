import React from "react";
import Index from "./index";

export const root = () => {
  return (
    <React.StrictMode>
      <Index status="active" title="react.js" />
      <Index title="vue.js" />
      <Index title="angular.js" />
      <Index data={{ name: "jasurbek", age: 19 }}>children</Index>
    </React.StrictMode>
  );
};

export default root;
