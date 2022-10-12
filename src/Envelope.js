import React from "react";
import "./App.css";

export default function Envelope(props) {
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
