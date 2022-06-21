import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='header'>
            <h1>Florent Bailly</h1>
            <div className='burger-menu'>
                    <NavLink to="/">
                        <span>Accueil</span>
                    </NavLink>
                    <NavLink to="/a-propos">
                        <span>À propos</span>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <span>Portfolio</span>
                    </NavLink>
                    <NavLink to="/contact">
                        <span>Contact</span>
                    </NavLink>

            </div>
        </div>
    );
};

export default Navigation;