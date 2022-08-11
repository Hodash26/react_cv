import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import envelope from '../icons/envelope.svg';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import phone from '../icons/phone.svg';
import location from '../icons/location.svg'


function Contact() {
  return (
    <div>
        <Navigation />


        <div className='contact'>
            <h2 className='title-contact'>Contactez-moi</h2>
            <span className="border-contact"></span>

            <div className='link localization'>
                    <img className='icon-contact' src={location} alt='Localization icon'/>
                <p>Essars</p>
            </div>

            <div className='link github'>
                <a href="https://github.com/Hodash26" target="_blank" rel="noopener noreferrer">
                    <img className='icon-contact' src={github} alt='GitHub icon'/>
                </a>
                <p>/Hodash26</p>
            </div>

            <div className='link linkedin'>
                <a href="https://www.linkedin.com/in/florent-bailly/" target="_blank" rel="noopener noreferrer">
                    <img className='icon-contact' src={linkedin} alt='LinkedIn icon'/>
                </a>
                <p>/florent-bailly</p>
            </div>

            <div className='link mail'>
                <a href="mailto:Florent.bailly62400@gmail.com" title='florent.bailly62400@gmail.com' target="_blank" rel="noopener noreferrer">
                    <img className='icon-contact' src={envelope} alt='Email icon'/>
                </a>
                <p>Florent.bailly62400@gmail.com</p>
            </div>

            <div className='link tel'>
                <a href="tel:+33695234289" title='06/95/23/42/89' target="_blank" rel="noopener noreferrer">
                    <img className='icon-contact' src={phone} alt='Telephone icon'/>
                </a>
                <p>06 95 23 42 89</p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact