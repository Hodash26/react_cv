import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';


const Lyra = () => {
    return (
        <div>
            <Navigation />

            <div className='container-logo-lyra'>
                <img className='logo-lyra' src="./media/lyra-logo.png" alt="logo LYRA SYSTEM"/>
            </div>

            <div className='container-btn-lyra'>
                <button className='btn-lyra'><a href='https://www.lyra-system.com/'>Consulter le site</a></button>
            </div>


            <div className='container-text-lyra'>
                <h2>Compétences</h2>
                <ul>
                    <li>
                        Construction des pages en fonction des wireframes Balsamiq & des maquettes Adobe Xd
                    </li>
                    <li>
                        Création de maquettes interactives avec Adoxe Xd pour le site ainsi que pour des vidéos promotionnelles
                    </li>
                    <li>
                        Amélioration des compétences via le plugin Elementor
                    </li>
                    <li>
                        Création de slide & acquisition de compétences via le plugin Slider Revolution
                    </li>
                    <li>
                        Amélioration des compétences sur WordPress
                    </li>
                    <li>
                        Relevé de traduction & integration en anglais
                    </li>
                    <li>
                        Contrôle qualité des textes concernant la plaquette des prix 
                    </li>
                    <li>
                        Commits & tests sur l'environnement de développement sur GitHub 
                    </li>
                </ul>

                <h2>Technologies / Plugins / Logiciels</h2>
                <div className='container-skills'>
                    <div className='container-icon-text'>
                        <img className='logo-wordpress' src="./media/wordpress-logo.png" alt="logo Wordpress"/>
                        <p>WordPress</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-slider-revolution' src="./media/slider-revolution-logo.png" alt="logo Slider Revolution"/>
                        <p>Slider Revolution</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-elementor' src="./media/elementor-logo.png" alt="logo Elementor"/>
                        <p>Elementor</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-adobexd' src="./media/adobexd-logo.png" alt="logo Adobe Xd"/>
                        <p>Adobe Xd</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-teams' src="./media/teams-logo.png" alt="logo Microsoft Teams"/>
                        <p>Microsoft Teams</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-balsamiq' src="./media/balsamiq-logo.png" alt="logo Balsamiq"/>
                        <p>Balsamiq</p>
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

export default Lyra;