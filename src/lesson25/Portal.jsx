import React from "react";
import ReactDom from "react-dom";

export const Portal = () => {
  return ReactDom.createPortal(
    <div>Jasurbek Otelbayev</div>,
    document.getElementById("portal")
  );
};
