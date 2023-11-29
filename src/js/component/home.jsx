import React from "react";
import SecondsCounter from "./SecondsCounter";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({seconds,minutes,hours}) => {
	return (
		<div className="bg-dark p-4 text-white">
			<SecondsCounter hours={hours} seconds={seconds} minutes={minutes}/>
		</div>
	);
};



export default Home;



