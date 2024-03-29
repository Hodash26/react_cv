import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';
import series from '../media/series.svg'
import diced20 from '../media/dice-d20.svg'
import diced6 from '../media/dice-d6.svg'
import discord from '../media/discord.svg'
import music from '../media/music.svg'
import gamepad from '../media/gamepad.svg'

const Home = () => {
    return (
        <div>
            <Navigation />

            <div className='presentation'>
                    <img className="img-FB horizontal" src="./media/img-fb-horizontal.jpg" alt="Florent Bailly"/>
                    <img className="img-FB vertical" src="./media/img-fb-vertical.jpg" alt="Florent Bailly"/>
                    <Typical className="presentation-text" loop={Infinity} 
                        steps={['Hello !', 2000 ,'Je suis développeur web junior', 2000,
                        'Je suis passionné', 2000,]}/>
            </div>

            <div className='about'>
                <p>Passionné du web & d'informatique, je me suis reconverti dans ce domaine depuis juin 2019.
                    Depuis ce jour, je ne cesse de me perfectionner en tant que développeur front-end
                    en oscillant entre projets d'écoles, projets personnels & en m'autoformant.
                </p>
            </div>

        <h2>ÉTUDES</h2>

        <div className='school'>
            <div className='square oval flip'>
                <div className='content'>
                    <div className='square-container-text front'>
                        <p className='square-text'>BAC STMG</p>
                    </div>
                    <div className='back'>
                        <p className='square-text'>2014-2016</p>
                    </div>
                </div>
            </div>

            <div className='square half flip'>
                <div className='content'>
                    <div className='square-container-text front'>
                        <p className='square-text'>BTS ASSISTANT DE GESTION PME-PMI</p>
                    </div>
                    <div className='back'>
                        <p className='square-text'>2016-2018</p>
                    </div>
                </div>
            </div>

            <div className='square parallelogram flip'>
                <div className='content'>
                    <div className='square-container-text front'>
                        <p className='square-text skew'>TITRE PRO DEVELOPPEUR WEB</p>
                    </div>
                    <div className='back'>
                        <p className='square-text skew'>2019</p>
                    </div>
                </div>
            </div>
            <div className='square lozenge flip'>
                <div className='content'>
                    <div className='square-container-text front'>
                        <p className='square-text'> LICENCE PRO CRÉA WEB</p>
                    </div>
                    <div className='back'>
                        <p className='square-text'>2020-2021</p>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='professional'>PROFESSIONNEL</h2>
        <h4>(En lien avec le développement)</h4>

        {/* HOVER CARD */}

        <div className='container-card develop'>
            <div className='card pro'>
                <div className='con-text'>
                    <h3 className='name-card'>Alternance HeX</h3>
                    <p className='date'>janvier 2020 ~ août 2020</p>
                    <p>- Développement WordPress</p>
                    <p>- Construction E-mailing</p>
                    <p>- Wireframes & Maquettes</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card pro'>
                <div className='con-text'>
                    <h3 className='name-card'>Stage Atos</h3>
                    <p className='date'>novembre 2019 ~ avril 2020</p>
                    <p>- Apprentissage d'Angular</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>
        </div>

        <h4>(Sans lien avec le développement)</h4>

        <div className='container-card'>
            <div className='card no-pro'>
                <div className='con-text'>
                    <h3 className='name-card'>Maître d'internat - AED</h3>
                    <p className='date'>septembre 2021 ~ août 2022</p>
                    <p>- Communication formelle & informelle</p>
                    <p>- Gestion des crises & méthodologies</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card no-pro'>
                <div className='con-text ad3'>
                    <h3 className='name-card'>Chauffeur - Livreur AD3 </h3>
                    <p className='date-small'>août 2020</p>
                    <p className='date-small'>octobre ~ novembre 2018</p>
                    <p className='date-small'>juillet ~ août 2017</p>
                    <p className='text-ad3'>- Livraison de linge en EHPAD & hopitaux</p>
                    <p>- Adaptabilité des clients</p>
                </div>
            </div>

            <div className='card no-pro'>
                <div className='con-text'>
                    <h3 className='name-card'>Préparateur de commande H2O</h3>
                    <p className='date'>juillet 2020</p>
                    <p>- Méthodologies</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card no-pro'>
                <div className='con-text'>
                    <h3 className='name-card'>Préparateur/Livreur commande Auchan drive</h3>
                    <p className='date'>decembre 2018 ~ fevrier 2019</p>
                    <p>- Méthodologies</p>
                    <p>- Travail en équipe</p>
                </div>
            </div>

            <div className='card no-pro'>
                <div className='con-text'>
                    <h3 className='name-card'>Stage Max-Mine</h3>
                    <p className='date'>mars ~ mai 2018</p>
                    <p>- Méthodologies</p>
                    <p>- Contact clients/fournisseurs</p>
                    <p>- Projet d'amélioration du tri séléctif</p>
                </div>
            </div>

            <div className='card no-pro'>
                <div className='con-text'>
                    <h2 className='name-card'>Stage Finassur</h2>
                    <p className='date'>mai ~ juin 2017</p>
                    <p>- Méthodologies</p>
                    <p>- Contact fournisseurs</p>
                </div>
            </div>
        </div>

        <h2>PORTFOLIO</h2>

        <div className='container-portfolio'>
            <div className='text-left'>
                <p>Grâce à des projets d'écoles, personnels, d'alternance et de stage j'ai pu
                    mettre mes compétences aux services des autres toujours dans une dynamique d'amélioration continue des
                    techniques et des langages de programmation que j'utilise.
                </p>
            </div>

            <div className='card-portfolio'>
                <div className='square-portfolio left'>
                    <p className='text-square-portfolio'>HeX GROUP</p>
                    <NavLink className='btn-portfolio' to="/hex">
                        <button>EN SAVOIR PLUS</button>
                    </NavLink>
                </div>
                <div className='square-portfolio right'>
                    <p className='text-square-portfolio'>Éden Rôliste</p>
                    <NavLink className='btn-portfolio' to="/eden">
                        <button>EN SAVOIR PLUS</button>
                    </NavLink>
                </div>
                <div className='square-portfolio left urwebee'>
                    <p className='text-square-portfolio'>Projet Urwebee</p>
                    <NavLink className='btn-portfolio' to="/urwebee">
                        <button>EN SAVOIR PLUS</button>
                    </NavLink>
                </div>
                <div className='square-portfolio right'>
                    <p className='text-square-portfolio'>Lyra System</p>
                    <NavLink className='btn-portfolio' to="/lyra">
                        <button>EN SAVOIR PLUS</button>
                    </NavLink>
                </div>
            </div>
        </div>

        <h2>LOISIRS</h2>

        <div className='container-hobbies'>
            <div className='container-icon-text'>
                <img className='icons' src={diced20} alt='D20 dice icon'/>
                <p>Jeux de rôle</p>
            </div>
            <div className='container-icon-text'>
                <img className='icons' src={gamepad} alt='Controller icon'/>
                <p>Jeux vidéo</p>
            </div>
            <div className='container-icon-text'>
                <img className='icons' src={music} alt='Music icon'/>
                <p>Musique</p>
            </div>
            <div className='container-icon-text'>
                <img className='icons' src={series} alt='series icon'/>
                <p>Séries</p>
            </div>
            <div className='container-icon-text'>
                <img className='icons' src={diced6} alt='D6 dice icon'/>
                <p>Jeux de société</p>
            </div>
            <div className='container-icon-text'>
                <img className='icons' src={discord} alt='discord icon'/>
                <p>Co-gérant de la Table des Rôlistes</p>
            </div>
        </div>

        <Footer />

        </div>
    );
};

export default Home;