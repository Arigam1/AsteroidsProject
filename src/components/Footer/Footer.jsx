import React from 'react';
import './Footer.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="section-inner">
            <div className="footer">
                {currentYear}© Все права и планета защищены
            </div>
        </footer>
    );
};

export default Footer;