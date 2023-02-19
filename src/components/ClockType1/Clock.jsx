import React from 'react';

import './Clock.css';
import useTime from "../../Hooks/useTime.jsx";

const ClockType1 = () => {
    const getTime = useTime();
    // TODO: Лог ниже выводится дважды, надо пофиксить.
    console.log(getTime);

    return (
        <div className="clock">
            <div className="wrapper">
                <div className="time">
                    <span>{getTime.hours}<span>:</span></span>
                    <span>{getTime.minutes}:</span>
                    <span>{getTime.seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default ClockType1;