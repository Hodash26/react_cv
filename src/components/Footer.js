import React from 'react';
import envelope from '../icons/envelope.svg';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import phone from '../icons/phone.svg';
import pdf from '../icons/pdf.svg';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='container-footer'>
                    <a href="./media/CV_2022.pdf" target="_blank" rel="noopener noreferrer" >
                        <img className='icon-footer' src={pdf} alt='PDF icon'/>
                    </a>
                    <a href="https://github.com/Hodash26" target="_blank" rel="noopener noreferrer">
                        <img className='icon-footer' src={github} alt='GitHub icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/florent-bailly/" target="_blank" rel="noopener noreferrer">
                        <img className='icon-footer' src={linkedin} alt='LinkedIn icon'/>
                    </a>
                    <a href="mailto:Florent.bailly62400@gmail.com" title='florent.bailly62400@gmail.com' target="_blank" rel="noopener noreferrer">
                    <img className='icon-footer' src={envelope} alt='Email icon'/>
                    </a>
                    <a href="tel:+33695234289" title='06/95/23/42/89' target="_blank" rel="noopener noreferrer">
                    <img className='icon-footer' src={phone} alt='Telephone icon'/>
                    </a>
                </div>
            </footer>
            <div>
                <p className='copyright'>Copyright © 2022 Hodash-Universe - Tous droits réservés.</p>
            </div>
        </div>
    );
};

export default Footer;