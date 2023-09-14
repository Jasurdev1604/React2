//! 10-dars
// 	- Class vs Hooks components
// 	- return vs without return hooks components
// 	- this in class and hooks
// 	- useState
// 	- primitive vs non primitive

import { useState } from "react";

//!class compnetga alternativ functional component chiqqan

const Hooks = () => {
  function get() {
    console.log("this is funciton");
  }
  return <h1>jasurbek</h1>;
};

const Hook = () => <h1>Jasurbek</h1>; //-> component ichida function yozib bolmaydi

//!useState(); => class componentda di stateni alternativi

// const [value , setValue] = useState(deaultValue)

// const [data, setData] = useState({
//   name: "jasuekek",
//   age: 19,
// });
