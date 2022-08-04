import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <Navigation />

            <h2>PORTFOLIO</h2>

            <div className='portfolio'>
                <div className='hex'>
                    <div className='portfolio-left'>
                        <h3>HeX GROUP</h3>
                        <p>HeX GROUP est une entreprise qui répond à l'ensemble des 
                            problématiques liées à la maîtrise de la contamination dans les environnements critiques.</p>
                        <p>Durant mon année de licence professionnelle j'ai pu integrer HeX en tant qu'alternant.</p>
                        <p>L'objectif de cette alternance était de mettre à profit mes connaissances Wordpress et de les
                            perfectionner au service du site.
                        </p>
                        <NavLink to="/hex">
                            <button className='btn-more'>En savoir plus</button>
                        </NavLink>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-hex' src="./media/hex-logo.png" alt="logo HeX GROUP"/>
                        <button className='btn-hex'><a href='https://www.hex-group.eu/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='eden-roliste'>
                    <div className='portfolio-left'>
                        <h3>Éden Rôliste</h3>
                        <p>Éden Rôliste est une auto-entreprise de prête plume dans le domaine du ludique & du Jeu de Rôle.</p>
                        <p>Éden avait besoin d'un nouveau site, qui serait facile d'accès et modifiable facilement et ou elle pourrait écrire des articles.</p>
                        <p>Ayant fait son 1er site en HTLM & CSS (de ce fait difficilement modifiable), j'opte pour Wordpress pour le second site.
                        </p>
                        <NavLink to="/eden">
                        <button className='btn-more'>En savoir plus</button>
                        </NavLink>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-eden' src="./media/eden-roliste.png" alt="logo Éden Rôliste"/>
                        <button className='btn-eden'><a href='https://eden-roliste.fr/'>Consulter le nouveau site</a></button>
                        <button className='btn-eden'><a href='../media/eden-site-old.pdf' download='eden-site-old.pdf'>Consulter l'ancien site (pdf)</a></button>
                    </div>
                </div>

                <div className='lyra'>
                    <div className='portfolio-left'>
                        <h3>LYRA SYSTEM</h3>
                        <p>LYRA SYSTEM est une entreprise liée à HeX GROUP.</p>
                        <p>C'est un Système d'acquisition & de supervision de données pour la Stratégie de Maîtrise de la Contamination (CCS).</p>
                        <p>L'objectif pour ce site sous Wordpress était de créer les maquettes par rapport aux wireframes pour ensuite développer ces maquettes sur le site.
                        </p>
                        <NavLink to="/lyra">
                            <button className='btn-more'>En savoir plus</button>
                        </NavLink>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-lyra' src="./media/lyra-logo.png" alt="logo LYRA SYSTEM"/>
                        <button className='btn-lyra'><a href='https://www.lyra-system.com/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='urwebee'>
                    <div className='portfolio-left'>
                        <h3>Urwebee</h3>
                        <p>Urwebee est une agence fictive qui propose la création de site web personnalisé.</p>
                        <p>Durant mon année de licence professionnelle j'ai pu travailler sur ce projet en tant que chef de projet & developpeur.</p>
                        <p>L'objectif de ce site était de valider les différentes compétences apprissent lors de l'année de licence professionnelle.
                        </p>

                        <NavLink to="/urwebee">
                        <button className='btn-more'>En savoir plus</button>
                        </NavLink>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-urwebee' src="./media/logo-urwebee.png" alt="logo Urwebee"/>
                        <button className='btn-urwebee'><a href='https://urwebee.hodash-universe.fr/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='karel'>
                    <div className='portfolio-left'>
                        <h3>Karel Blanckaert</h3>
                        <p>Karel Blanckaert est un ostéopathe exerçant dans son propre cabinet depuis peu, jeune et dynamique,
                            il décide de mettre tous les moyens de communication modernes de son côté afin de développer sa clientèle.</p>
                        <p>Durant mon année de licence professionnelle j'ai pu travailler sur ce projet en tant que chef de projet, developpeur et
                            à la réalisation de wireframes et maquettes.</p>
                        <p>L'objectif de ce site était de pouvoir réaliser ce projet dans un temps très court en répondant aux attentes du client.
                        </p>

                        <NavLink to="/karel">
                        <button className='btn-more'>En savoir plus</button>
                        </NavLink>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-karel' src="./media/karel-logo.png" alt="logo Karel Blanckaert"/>
                        <button className='btn-karel'><a href='https://osteopathe-karel-blanckaert.com/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='mbm'>
                    <div className='portfolio-left'>
                        <h3>MBM Coaching</h3>
                        <p>MBM Coaching est une auto-entreprise de coach sportif.</p>
                        <p>Durant mon année de licence professionnelle j'ai pu travailler sur ce projet en tant que chef de projet.</p>
                        <p>L'objectif de ce site était d'avoir une première expérience avec un client réel et répondre à ses attentes.
                        </p>

                        <NavLink to="/mbm">
                        <button className='btn-more'>En savoir plus</button>
                        </NavLink>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-mbm' src="./media/mbm-logo.png" alt="logo MBM Coaching"/>
                        <button className='btn-mbm'><a href='https://mbmcoaching.fr/'>Consulter le site</a></button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Portfolio;