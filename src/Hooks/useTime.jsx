import {useEffect, useState} from 'react';

export default function useTime() {

    useEffect( () => {
        setInterval(()=>{
            setDateNow(getTime)
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

    return dateNow;
}