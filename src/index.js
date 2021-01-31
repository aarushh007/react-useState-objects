import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const obj = {
  name: "Aarush",
  age: 13,
  message: "Helloo peopleee"
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App {...obj} />
  </StrictMode>,
  rootElement
);
