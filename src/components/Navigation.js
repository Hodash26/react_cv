import React from 'react'
import { useState } from "react"
import { NavLink } from 'react-router-dom';

function NewNavigation() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    console.log(showLinks)

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
                <NavLink to="/a-propos" className='navbar-link'>
                    A propos
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
        <div className='navbar-burger burger-button' onClick={handleShowLinks}>
            <span className='burger-bar'></span>
        </div>
    </nav>
  )
}

export default NewNavigation