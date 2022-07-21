import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import edenOldSite from '../media/eden-site-old.pdf'

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
                        <p>Durant mon année de licence professionnel j'ai pu integrer HeX en tant qu'alternant.</p>
                        <p>L'objectif de cette alternance était de mettre à profit mes connaissances Wordpress et de les
                            perfectionner au service du site.
                        </p>

                        <button className='btn-more'><a href=''>En savoir plus</a></button>
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

                        <button className='btn-more'><a href=''>En savoir plus</a></button>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-eden' src="./media/eden-roliste.png" alt="logo Éden Rôliste"/>
                        <button className='btn-eden'><a href='https://eden-roliste.fr/'>Consulter le nouveau site</a></button>
                        <button className='btn-eden'><a >Consulter l'ancien site</a></button>
                    </div>
                </div>

                <div className='hex'>
                    <div className='portfolio-left'>
                        <h3>HeX GROUP</h3>
                        <p>HeX GROUP est une entreprise qui répond à l'ensemble des 
                            problématiques liées à la maîtrise de la contamination dans les environnements critiques.</p>
                        <p>Durant mon année de licence professionnel j'ai pu integrer HeX en tant qu'alternant.</p>
                        <p>L'objectif de cette alternance était de mettre à profit mes connaissances Wordpress et de les
                            perfectionner au service du site.
                        </p>

                        <button className='btn-more'><a href=''>En savoir plus</a></button>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-hex' src="./media/hex-logo.png" alt="logo HeX GROUP"/>
                        <button className='btn-hex'><a href='https://www.hex-group.eu/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='hex'>
                    <div className='portfolio-left'>
                        <h3>HeX GROUP</h3>
                        <p>HeX GROUP est une entreprise qui répond à l'ensemble des 
                            problématiques liées à la maîtrise de la contamination dans les environnements critiques.</p>
                        <p>Durant mon année de licence professionnel j'ai pu integrer HeX en tant qu'alternant.</p>
                        <p>L'objectif de cette alternance était de mettre à profit mes connaissances Wordpress et de les
                            perfectionner au service du site.
                        </p>

                        <button className='btn-more'><a href=''>En savoir plus</a></button>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-hex' src="./media/hex-logo.png" alt="logo HeX GROUP"/>
                        <button className='btn-hex'><a href='https://www.hex-group.eu/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='hex'>
                    <div className='portfolio-left'>
                        <h3>HeX GROUP</h3>
                        <p>HeX GROUP est une entreprise qui répond à l'ensemble des 
                            problématiques liées à la maîtrise de la contamination dans les environnements critiques.</p>
                        <p>Durant mon année de licence professionnel j'ai pu integrer HeX en tant qu'alternant.</p>
                        <p>L'objectif de cette alternance était de mettre à profit mes connaissances Wordpress et de les
                            perfectionner au service du site.
                        </p>

                        <button className='btn-more'><a href=''>En savoir plus</a></button>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-hex' src="./media/hex-logo.png" alt="logo HeX GROUP"/>
                        <button className='btn-hex'><a href='https://www.hex-group.eu/'>Consulter le site</a></button>
                    </div>
                </div>

                <div className='hex'>
                    <div className='portfolio-left'>
                        <h3>HeX GROUP</h3>
                        <p>HeX GROUP est une entreprise qui répond à l'ensemble des 
                            problématiques liées à la maîtrise de la contamination dans les environnements critiques.</p>
                        <p>Durant mon année de licence professionnel j'ai pu integrer HeX en tant qu'alternant.</p>
                        <p>L'objectif de cette alternance était de mettre à profit mes connaissances Wordpress et de les
                            perfectionner au service du site.
                        </p>

                        <button className='btn-more'><a href=''>En savoir plus</a></button>
                    </div>
                    <div className='portfolio-right'>
                        <img className='img-hex' src="./media/hex-logo.png" alt="logo HeX GROUP"/>
                        <button className='btn-hex'><a href='https://www.hex-group.eu/'>Consulter le site</a></button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Portfolio;