import React from 'react';
import {useRouteError} from 'react-router-dom';

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1 style={{color: 'red'}}>404</h1>
            <h3>Page not found!</h3>
        </div>
    );
};