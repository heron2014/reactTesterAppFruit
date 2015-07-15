var React = require("react");
var AppFruit = require("./components/AppFruit.jsx");
var HeaderApp=require("./components/HeaderApp.jsx");


var rootEl = document.getElementById("container");
var headerPos= document.getElementById("headerContainer");

React.render(
  <AppFruit />,
  rootEl
);


