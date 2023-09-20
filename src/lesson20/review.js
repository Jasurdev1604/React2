//! 20-dars
// 	- axios
// 	- fetch vs axios
// 	- vanilla js vs 3rd part library
// 	- manually vs automatic => data transform
// 	- npm- install whatwg-fetch --save polyfill for-fetch

import axios from "axios";

//!Axios => thrid part library , auto transformer

axios.post("endPoint", {
  headers: {},
  body: {},
});

//!axiosni import qipsh kerak react ga

axios({
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: { name: "jaurbek" },
  timeout: 10000,
  url: "https://jsonplaceholder.typicode.com/users",
}).then((res) => console.log(res.data));

//timeout => qanchadir vaqtdan keyin requestni tioxtatadi

//!fetchda timeout orniga AbordController ishlariladi

const signal = new AbortController();

let promise = fetch("https://", {
  body: {},
  headers: {},
  signal,
});

setTimeout(() => signal.abort(), 1000);

//!interceptors => rquest va response dan oldin nimadir bajarish uchun

axios.interceptors.request.use((request) => {
  console.log(request);
  request.headers.Authorization = `Bearer token`;
  return request;
});
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});
