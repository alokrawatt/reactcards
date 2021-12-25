import React from "react";
import reactDom from "react-dom";
import App from "./App";
import {add,sub,mult,div} from './Calc'

reactDom.render(
  <App/>,
document.getElementById('root'));
