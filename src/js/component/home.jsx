import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
    return (<div className="bigCounter mx-auto">
        <div className="calandar" >
            <i className="fa-regular fa-clock fa"></i>
        </div>
		<div className="sixthDigit">{Math.floor(props.seconds /1000000) %10}</div>
		<div className="fifthDigit">{Math.floor(props.seconds /100000) %10}</div>
        <div className="fourthDigit">{Math.floor(props.seconds /10000) %10}</div>
        <div className="thirdDigit">{Math.floor(props.seconds /1000) %10}</div>
        <div className="secondDigit">{Math.floor(props.seconds /100) %10}</div>
        <div className="firstDigit">{Math.floor(props.seconds /10) %10}</div>
    </div>);

};

export default Home;
