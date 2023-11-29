import React from "react";


const SecondsCounter = ({seconds,hours,minutes,stopCounter}) => {
    return(
        <div>
        <ul className="list-unstyled d-flex justify-content-center ">
            <li className="mx-2 border rounded border-secondary p-1 fs-2"><i className="fa fa-clock"/></li>
            <li className="border rounded border-secondary p-1 fs-2">{hours}</li>
            <li className="mx-2 border rounded border-secondary p-1 fs-2">{minutes}</li>
            <li className="border rounded border-secondary p-1 fs-2">{seconds}</li>
        </ul>
        </div>
    );
};


export default SecondsCounter;