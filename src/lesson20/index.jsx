import React, { useEffect } from "react";
import axios from "axios";

export default function index() {
  useEffect(() => {
    axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: { name: "jaurbek" },
      timeout: 10000,
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((res) => console.log(res.data));
  }, []);

  return (
    <React.Fragment>
      <h1>Axios</h1>
    </React.Fragment>
  );
}
