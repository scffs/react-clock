import React, {useEffect, useState} from 'react';

import './Clock.css';

const ClockType1 = () => {
    useEffect( () => {
        setInterval(()=>{
            setDateNow(getTime())
        },1000)

    }, [])

    const getTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        return {hours, minutes, seconds}
    }

    const [dateNow, setDateNow] = useState(getTime())

    return (
        <div className="clock">
            <div className="wrapper">
                <div className="time">
                    <span>{dateNow.hours}<span>:</span></span>
                    <span>{dateNow.minutes}:</span>
                    <span>{dateNow.seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default ClockType1;