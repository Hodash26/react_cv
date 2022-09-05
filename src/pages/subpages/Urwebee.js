import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';


const Urwebee = () => {
    return (
        <div>
            <Navigation />

            <div className='container-logo-urwebee'>
                <img className='logo-urwebee' src="./media/logo-urwebee.png" alt="logo Urwebee"/>
            </div>

            <div className='container-btn-urwebee'>
                <button className='btn-urwebee'><a href='https://urwebee.hodash-universe.fr/'>Consulter le site</a></button>
            </div>


            <div className='container-text-urwebee'>
                <h2>Compétences</h2>
                <ul>
                    <li>
                        Veille & croisement des ressources pour l'identité du site
                    </li>
                    <li>
                        Création d'une charte graphique avec logo, polices d'écritures, couleurs
                    </li>
                    <li>
                        Création de wireframes & maquettes interactifs avec Figma pour le site
                    </li>
                    <li>
                        Construction des pages en fonction des wireframes & des maquettes
                    </li>
                    <li>
                        Travail en groupe pour l'élaboration du projet
                    </li>
                    <li>
                        Amélioration des compétences sur GitHub notamment avec les pulls request, les branchs
                    </li>
                    <li>
                        Consolidation des acquis en HTML & CSS
                    </li>
                    <li>
                        Intégration d'une bibliothèque d'animation (Animate On Scroll)
                    </li>
                    <li>
                        Utilisation de JavaScript pour le menu burger & pour le changement de couleur au scroll
                    </li>
                    <li>
                        Commits & tests sur l'environnement de développement sur GitHub 
                    </li>
                </ul>

                <h2>Technologies / Plugins / Logiciels</h2>
                <div className='container-skills'>
                    <div className='container-icon-text'>
                        <img className='logo-html' src="./media/html-logo.png" alt="logo HTML 5"/>
                        <p>HTML</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-css' src="./media/css-logo.png" alt="logo CSS 3"/>
                        <p>CSS</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-javascript' src="./media/js-logo.png" alt="logo Javascript"/>
                        <p>JavaScript</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-php' src="./media/php-logo.png" alt="logo PHP"/>
                        <p>PHP</p>
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

export default Urwebee;