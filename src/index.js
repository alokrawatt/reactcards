import react from "react";
import reactDom from "react-dom";
import name, { homeTown, myNames } from "./App";

reactDom.render(
  <>
    <ol>
      <li>Heyssoo..</li>
      <li> {name} </li>
      <li> {homeTown} </li>
      <li> {myNames()} </li>
    </ol>
  </>,
  document.getElementById("root")
);
