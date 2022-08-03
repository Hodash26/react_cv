import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';



const Hex = () => {
    return (
        <div>
            <Navigation />

            <div className='container-logo-hex'>
                <img className='logo-hex' src="./media/hex-logo.png" alt="logo HeX GROUP"/>
            </div>
            <div className='container-btn-hex'>
                <button className='btn-hex'><a href='https://www.hex-group.eu/'>Consulter le site</a></button>
            </div>


            <div className='container-text-hex'>
                <h2>Compétences</h2>
                <ul>
                    <li>
                        Construction des pages en fonction des wireframes & des maquettes
                    </li>
                    <li>
                        Création de wireframes & de maquettes avec Adoxe Xd
                    </li>
                    <li>
                        Amélioration du SEO via le plugin YOAST SEO
                    </li>
                    <li>
                        Amélioration des compétences via le plugin Elementor
                    </li>
                    <li>
                        Création de slide & acquisition de compétences via le plugin Slider Revolution
                        </li>
                    <li>
                        Amélioration des compétences sur Wordpress
                    </li>
                    <li>
                        Changements des slides & des actus sur la page d'accueil chaque semaine
                    </li>
                    <li>
                        Relever de traduction & integration en anglais & Neerlandais
                    </li>
                    <li>
                        Création de campagne d'emailing et du mail en question via Mailjet
                    </li>
                    <li>
                        MindMap du site HeX
                    </li>
                </ul>

                <h2>Technologies / Plugins / Logiciels</h2>
                <div className='container-skills'>
                    <div className='container-icon-text'>
                        <img className='logo-wordpress' src="./media/wordpress-logo.png" alt="logo Wordpress"/>
                        <p>Wordpress</p>
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
                        <img className='logo-yoast' src="./media/yoast-logo.png" alt="logo Yoast SEO"/>
                        <p>YOAST SEO</p>
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
                        <img className='logo-mailjet' src="./media/mailjet-logo.png" alt="logo Mailjet"/>
                        <p>Mailjet</p>
                    </div>
                    <div className='container-icon-text'>
                        <img className='logo-balsamiq' src="./media/balsamiq-logo.png" alt="logo Balsamiq"/>
                        <p>Balsamiq</p>
                    </div>
                </div>


            </div>


            <Footer />
        </div>
    );
};

export default Hex;