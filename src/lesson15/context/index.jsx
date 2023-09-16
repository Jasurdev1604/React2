import React from "react";
import CounterC from "./context";

export default function Context({ children }) {
  return (
    <React.Fragment>
      <CounterC>{children}</CounterC>
    </React.Fragment>
  );
}
