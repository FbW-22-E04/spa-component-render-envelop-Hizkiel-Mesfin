import React from "react";
import "./App.css";

function Envelope(props) {
  console.log(props);

  return (
    <div className="container">
      <div className="sender">
        <p> {props.sedName} </p>
        <p> {props.sedAdr} </p>
        <p> {props.sedPlace} </p>
      </div>

      <div className="reciver">
        <p> {props.recName} </p>
        <p> {props.recAdr} </p>
        <p> {props.recPlace} </p>
      </div>

      <div className="stamp">STAMP</div>
    </div>
  );
}

export default function Address() {
  return (
    <Envelope
      sedName="Ezekiel"
      sedAdr="3432 fake str."
      sedPlace="Neumünster"
      recName="Musk"
      recAdr="432 fake str."
      recPlace="USA"
    />
  );
}
