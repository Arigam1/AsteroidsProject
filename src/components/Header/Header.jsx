import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="section-header">
            <div className="section-inner">
                <div className="section-header-content">
                    <div className="section-header-content-logo">
                        <div className="section-header-content-logo-name"><NavLink to={`/`}>ARMAGGEDON V</NavLink></div>
                        <div className="section-header-content-logo-description">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
                    </div>
                    <div className="section-header-content-more">
                        <div className="section-header-content-more-types"><NavLink to={`/`}>Астеройды</NavLink></div>
                        <div className="section-header-content-more-destroy"><NavLink to={`/destroy`}>Уничтожение</NavLink></div>
                    </div>
                </div>
                <hr className="hr" />
            </div>
        </header >
    );
};

export default Header;