import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const About = () => {
    return (
        <div>
            <Navigation />

            <div className='container-about'>
                <h3>
                    Comment ai-je procédé pour le développement de ce site ?
                </h3>
                <div className='container-text-about'>
                    <ol>
                        <li>Recherche sur le design & sur le framework à utiliser.</li>

                        <li>Construction des wireframes</li>

                        <li>Début du maquettage & veille sur des sites comme <a href='https://www.awwwards.com/'>Awwwards</a> ou
                        encore <a href='https://dribbble.com/'>Dribbble</a></li>

                        <li>Recherche de tutoriels & autoformation sur ReactJS</li>

                        <li>Création du repertoire <a href='https://github.com/Hodash26/react_cv'>GitHub</a></li>

                        <li>Initialisation du projet ReactJS</li>

                        <li>Mise en place du SCSS & import de react router dom</li>

                        <li>Mise en place des components navigation & footer</li>

                        <li>Correction des problèmes liés au menu burger responvive</li>

                        <li>Développement des différentes pages en responsive</li>

                        <li>Recherche de background sur <a href='https://bgjar.com/'>BGJar</a></li>

                        <li>Recherche d'animation notamment <a href='https://www.npmjs.com/package/react-typical'>React Typical</a></li>

                        <li>Correction de différents petits bug & optimisation</li>

                        <li>Publication du site via FileZilla</li>

                    </ol>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;