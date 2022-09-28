import React from 'react'
import { useState } from "react"
import { NavLink } from 'react-router-dom';

function NewNavigation() {

    const [showLinks, setShowLinks] = useState(false);

    const [stickyBurger, setStickyBurger] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const handleStickyBurger = () => {
        setStickyBurger(!stickyBurger)
    }


  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
        <div className='navbar-title'>
            <strong><h1>Florent Bailly</h1></strong>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-item slideInDown-1'>
                <NavLink to="/" className='navbar-link'>
                    Accueil
                </NavLink>
            </li>
            <li className='navbar-item slideInDown-2'>
                <NavLink to="/conception" className='navbar-link'>
                    Conception
                </NavLink>
            </li>
            <li className='navbar-item slideInDown-3'>
                <NavLink to="/portfolio" className='navbar-link'>
                    Portfolio
                </NavLink>
            </li>
            <li className='navbar-item slideInDown-4'>
                <NavLink to="/contact" className='navbar-link'>
                    Contact
                </NavLink>
            </li>
        </ul>
        <div className={`navbar-burger ${stickyBurger ? "burger-button" : "sticky-burger-button"} `} onClick={handleShowLinks}>
            <span className='burger-bar' onClick={handleStickyBurger}></span>
        </div>
    </nav>
  )
}

export default NewNavigation