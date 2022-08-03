import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';


const Eden = () => {
    return (
        <div>
            <Navigation />

            <div className='container-logo-hex'>
                <img className='logo-eden' src="./media/eden-roliste.png" alt="logo Éden Rôliste"/>
            </div>
            <div className='container-btn-eden'>
                <button className='btn-eden'><a href='https://eden-roliste.fr/'>Consulter le site</a></button>
                <button className='btn-eden'><a href='../media/eden-site-old.pdf' download='eden-site-old.pdf'>Consulter l'ancien site (pdf)</a></button>
            </div>

            <div className='container-text-eden'>
                <h2>Compétences</h2>
                <ul>
                    <li>
                        Construction des pages en fonction des wireframes & des maquettes
                    </li>
                    <li>
                        Création de wireframes & de maquettes avec Figma
                    </li>
                    <li>
                        Amélioration des compétences via le plugin Elementor
                    </li>
                    <li>
                        Amélioration des compétences sur Wordpress
                    </li>
                    <li>
                        Utilisation du plugin Duplicator afin de faire des sauvegardes du site
                    </li>
                    <li>
                        Utilisation du plugin GDPR Cookie Consent pour la gestion de la loi sur le RGPD
                    </li>
                    <li>
                        Utilisation du plugin Timeline widget afin de constuire la section parcours
                    </li>
                    <li>
                        Utilisation du plugin Jupiter X Core pour gérer l'envoi des mails depuis le site
                    </li>
                    <li>
                        Configuation du .htaccess afin que le site soit en HTTPS
                    </li>
                    <li>
                        Publication du site avec Filezilla
                    </li>
                </ul>

                <h2>Technologies / Plugins / Logiciels</h2>
                <div className='container-skills'>
                    <div className='container-icon-text'>
                        <img className='logo-wordpress' src="./media/wordpress-logo.png" alt="logo Wordpress"/>
                        <p>Wordpress</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-duplicator' src="./media/duplicator-logo.png" alt="logo Duplicator"/>
                        <p>Duplicator</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-elementor' src="./media/elementor-logo.png" alt="logo Elementor"/>
                        <p>Elementor</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-figma' src="./media/figma-logo.png" alt="logo Figma"/>
                        <p>Figma</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-filezilla' src="./media/filezilla-logo.png" alt="logo Filezilla"/>
                        <p>Filezilla</p>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default Eden;