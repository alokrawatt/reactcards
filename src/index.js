import react from "react";
import reactDom from "react-dom";
import name, { homeTown, myNames } from "./App";
// import * as anything from './App';

reactDom.render(
  <>
    <ul>
      <li>Heyssoo..</li>
      <li> {name} </li>
      <li> {homeTown} </li>
      <li> {myNames()} </li>


{/* //when adding all functions at once */}
      {/* <li> {anyname.default} </li>
      <li> {anyname.homeTown} </li>
      <li> {anyname.myNames()} </li> */}
    </ul>
  </>,
  document.getElementById("root")
);
