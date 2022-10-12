import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Envelope from "./Envelope";

ReactDOM.render(
  <Envelope
    sedName="Ezekiel"
    sedAdr="3432 fake str."
    sedPlace="Neumünster"
    recName="Musk"
    recAdr="432 fake str."
    recPlace="USA"
  />,
  document.getElementById("root")
);
