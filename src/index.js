import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2021, 12, 12, 14);
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if(curDate >= 1 && curDate <12){
  greeting ='Good Morning';
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate <16){
greeting = 'Good Evening';
cssStyle.color = "Orange";
}else {
  greeting = 'Good Night';
  cssStyle.color = "Black";
}
ReactDOM.render(
<h1>hey everyone, <span style={ cssStyle }> { greeting } </span> </h1>,
  document.getElementById('root')
);


