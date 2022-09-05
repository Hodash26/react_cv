import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

const Mbm = () => {
    return (
        <div>
            <Navigation />

            <div className='container-logo-mbm'>
                <img className='logo-mbm' src="./media/mbm-logo.png" alt="logo MBM Coaching"/>
            </div>

            <div className='container-btn-mbm'>
                <button className='btn-mbm'><a href='https://mbmcoaching.fr/'>Consulter le site</a></button>
            </div>

            <div className='container-text-mbm'>
                <h2>Compétences</h2>
                <ul>
                    <li>Veille & croisement des ressources pour l'identité du site.</li>
                    <li>Reprise de la charte graphique en apportant des améliorations</li>
                    <li>
                        Création de wireframes & maquettes avec Figma pour le site
                    </li>
                    <li>
                        Construction des pages en fonction des wireframes & des maquettes
                    </li>
                    <li>
                        Amélioration des compétences sur WordPress notamment avec ACF
                    </li>
                    <li>
                        Amélioration des compétences en PHP
                    </li>
                    <li>
                        Acquisition de compétences sur WooCommerce
                    </li>
                    <li>
                        Travail en groupe pour l'élaboration du projet & rendez-vous régulier avec le client
                    </li>
                    <li>
                        Commits & tests sur l'environnement de developpement sur GitHub 
                    </li>
                </ul>

                <h2>Technologies / Plugins / Logiciels</h2>
                <div className='container-skills'>
                    <div className='container-icon-text'>
                        <img className='logo-wordpress' src="./media/wordpress-logo.png" alt="logo Wordpress"/>
                        <p>WordPress</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-php' src="./media/php-logo.png" alt="logo PHP"/>
                        <p>PHP</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-woocommerce' src="./media/woo-commerce-logo.png" alt="logo Woo Commerce"/>
                        <p>WooCommerce</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-figma' src="./media/figma-logo.png" alt="logo Figma"/>
                        <p>Figma</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-github' src="./media/github-logo.png" alt="logo GitHub"/>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
            <div className='go-back'>
                <NavLink to="/portfolio"><img className='white-arrow' src='./media/white-arrow.png' alt='Flèche blanche'></img>Revenir à portfolio</NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Mbm;