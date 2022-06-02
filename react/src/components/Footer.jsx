import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
// FaInstagram
// FaCopyright
import './Footer.css'

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className="Copy">
                <i><FaCopyright/></i>
                <a href="#">Unker - 2022</a>
            </div>
            <div className='Insta'>
                <i><FaInstagram/></i>
                <a href="#">fe_santos95</a>
            </div>
        </div>
    )
}

export default Footer;