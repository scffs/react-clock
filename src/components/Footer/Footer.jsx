import React from 'react';

import './Footer.css';

import {VscGithubAlt} from 'react-icons/vsc';

const Footer = () => {
    return (
        <footer>
            <a href='https://github.com/scffs' target='_blank'>
                <VscGithubAlt />
            </a>
            <p>Copyright © 2023. Scoffs. All rights reserved</p>
        </footer>
    );
};

export default Footer;