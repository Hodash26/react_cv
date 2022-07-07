import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id='accueil' className='container-header-section'>
            <header>
                <h1>Florent Bailly</h1>
                <div className='container-link'>
                    <NavLink to="/">
                        <p>Accueil</p>
                    </NavLink>

                    <NavLink to="/a-propos">
                        <p>À propos</p>
                    </NavLink>

                    <NavLink to="/portfolio">
                        <p>Portfolio</p>
                    </NavLink>
                    
                    <NavLink to="/contact">
                        <p>Contact</p>
                    </NavLink>
                </div>

{/* --------------------MENU-BURGER TAB & MOBILE-------------------- */}

            <div className='header--container'>
                <div className='burger--button'>
                    <span className='ligne'></span>
                    <span className='ligne'></span>
                    <span className='ligne'></span>
                </div>
            </div>
            <div className='main-menu'>
                <nav>
                    {/* <a className='menu--off' href="#">
                        <p>Accueil</p>
                    </a>
                    <a className='menu--off' href="#">
                        <p>A propos</p>
                    </a>
                    <a className='menu--off' href="#">
                        <p>Portfolio</p>
                    </a>
                    <a className='menu--off' href="#">
                        <p>Contact</p>
                    </a> */}

                    <NavLink to="/">
                        <p>Accueil</p>
                    </NavLink>

                    <NavLink to="/a-propos">
                        <p>À propos</p>
                    </NavLink>

                    <NavLink to="/portfolio">
                        <p>Portfolio</p>
                    </NavLink>
                    
                    <NavLink to="/contact">
                        <p>Contact</p>
                    </NavLink>
                </nav>
            </div>
        </header>
    </div>
    );
};

export default Navigation;