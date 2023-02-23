import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header
            style={{
                padding: '20px 40px',
                fontSize: '2rem',
            }}
        >
            <h2>React Clock</h2>
            <ul>
                <li>
                    <Link to='/type1'>Type 1</Link>
                </li>
                <li>
                    <Link to='type2'>Type 2</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;