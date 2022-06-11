import React from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Navigation />

            <div className='notFound'>
                <h3>Désolé, cette page n'existe pas.</h3>
                <NavLink to="/">
                    <div className='btnAccueil'>Accueil</div>
                </NavLink>
            </div>

        </div>
    );
};

export default NotFound;