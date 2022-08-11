import React from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer'


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

            <Footer />

        </div>
    );
};

export default NotFound;