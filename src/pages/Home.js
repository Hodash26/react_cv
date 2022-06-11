import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />

            <div className='presentation'>
                    <img className="img-FB" src="./media/project2.jpg" alt="Florent Bailly"/>
                    <p className='presentation-text'>
                        Développeur Web Junior
                    </p>
            </div>

            <div className='about'>
                <p>Passioné du web & d'informatique, je me suis reconverti dans ce domaine depuis juin 2019.
                    Depuis ce jour, je ne cesse de me perfectionner en tant que développeur front-end.
                    En oscillant entre projets d'écoles, projets personnels & en m'auto-formant.
                </p>
            </div>

        <h2>ÉTUDES</h2>

        <div className='school'>
            <div className='square'>
                <div className='square-container-text'>
                    <p className='square-text'>BAC STMG</p>
                </div>
                <button className='btn-school'> En savoir plus</button>
            </div>

            <div className='square'>
                <div className='square-container-text'>
                    <p className='square-text'>BTS ASSISTANT DE GESTION PME-PMI</p>
                </div>
                <button className='btn-school'> En savoir plus</button>
            </div>

            <div className='square'>
                <div className='square-container-text'>
                    <p className='square-text'>TITRE PRO DEVELOPPEUR WEB</p>
                </div>
                <button className='btn-school'> En savoir plus</button>
            </div>

            <div className='square'>
                <div className='square-container-text'>
                    <p className='square-text'>LICENCE PRO CRÉA WEB</p>
                </div>
                <button className='btn-school'> En savoir plus</button>
            </div>
        </div>

        <h2>PROFESSIONNEL</h2>
        <h4>(En lien avec le développement)</h4>

        {/* HOVER CARD */}

        <div className='container-card'>
            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Alternance HeX</h2>
                    <p className='date'>janvier 2020 ~ août 2020</p>
                    <p>- Developpement Wordpress</p>
                    <p>- Construction E-mailing</p>
                    <p>- Wireframes & Maquettes</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Stage Atos</h2>
                    <p className='date'>novembre 2019 ~ avril 2020</p>
                    <p>- Apprentissage d'Angular</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>
        </div>

        <h4>(Sans lien avec le développement)</h4>

        <div className='container-card'>
            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Maître d'internat - AED</h2>
                    <p className='date'>septembre 2021 ~ août 2022</p>
                    <p>- Communication formelle & informelle</p>
                    <p>- Gestion des crises & méthodologies</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card'>
                <div className='con-text ad3'>
                    <h2 className='name-card'>Chauffeur - Livreur AD3 </h2>
                    <p className='date-small'>août 2020</p>
                    <p className='date-small'>octobre ~ novembre 2018</p>
                    <p className='date-small'>juillet ~ août 2017</p>
                    <p className='text-ad3'>- Livraison de linge en EHPAD & hopitaux</p>
                    <p>- Adaptabilité des clients</p>
                </div>
            </div>

            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Préparateur de commande H2O</h2>
                    <p className='date'>juillet 2020</p>
                    <p>- Méthodologies</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Préparateur/Livreur commande Auchan drive</h2>
                    <p className='date'>decembre 2018 ~ fevrier 2019</p>
                    <p>- Méthodologies</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Stage Max-Mine</h2>
                    <p className='date'>mars ~ mai 2018</p>
                    <p>- Méthodologies</p>
                    <p>- Contact clients/fournisseurs</p>
                    <p>- Projet d'amélioration du tri séléctif</p>
                </div>
            </div>

            <div className='card'>
                <div className='con-text'>
                    <h2 className='name-card'>Stage Finassur</h2>
                    <p className='date'>mai ~ juin 2017</p>
                    <p>- Méthodologies</p>
                    <p>- Contact fournisseurs</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Home;