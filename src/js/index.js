//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
    let formatNumber = (number) => (number < 10 ? `0${number}` : number);
    let digito1 = 0;

    setInterval(() => {
        digito1++;
        const seconds = formatNumber(digito1 % 60);
        const minutes = formatNumber(Math.floor(digito1 / 60) % 60);
        const hours = formatNumber(Math.floor(digito1 / 3600));
    
        ReactDOM.render(
            <Home hours={hours} minutes={minutes} seconds={seconds} />,
            document.querySelector("#app")
        );
    }, 1000);


