import React from "react";
import Index from "./index";

const Students = [
  {
    id: 1,
    name: "jasurbek",
    age: 19,
  },
  {
    id: 2,
    name: "jasurbek",
    age: 19,
  },
  {
    id: 3,
    name: "jasurbek",
    age: 19,
  },
];

export const root = () => {
  return (
    <React.StrictMode>
      {/* <Index status="active" title="react.js" />
      <Index title="vue.js" />
      <Index title="angular.js" />
      <Index data={{ name: "jasurbek", age: 19 }}>children</Index> */}
      {Students.map((e) => {
        return <Index key={e.id} data={e} />;
      })}
    </React.StrictMode>
  );
};

export default root;
