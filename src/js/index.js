//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import './icons.js';
//include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home";

//import your own components
let seconds=0;
setInterval(()=>{
    seconds++;
    ReactDOM.render(<Home seconds={seconds} />, document.querySelector("#app"));
})

//render your react application