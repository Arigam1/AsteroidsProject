import React from 'react';
import './Footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">

            <div className="section-inner">
                {currentYear}© Все права и планета защищены
            </div>
        </footer>
    );
};

export default Footer;