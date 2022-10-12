import React from "react";
import "./App.css";

function Envelope(props) {
  const { sedName, sedAdr, sedPlace, recName, recAdr, recPlace } = props;
  return (
    <div className="container">
      <div className="sender">
        <p> {sedName} </p>
        <p> {sedAdr} </p>
        <p> {sedPlace} </p>
      </div>

      <div className="reciver">
        <p> {recName} </p>
        <p> {recAdr} </p>
        <p> {recPlace} </p>
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
