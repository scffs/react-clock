import React from 'react';

import useTime from '../../Hooks/useTime.jsx';

import './Clock.css';

const ClockType1 = () => {
    const getTime = useTime();

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