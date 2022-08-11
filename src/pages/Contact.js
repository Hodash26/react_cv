import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'


function Contact() {
  return (
    <div>
        <Navigation />

        <div className='contact'>
            <form name="contact" method="post" className='contact-form' data-netlify="true" onSubmit="submit">

                <input type="hidden" name="form-name" value="contact" />
               
                <label htmlFor="name">Nom & prénom: </label>
                <input type="text" name="name"/>
            
                <label htmlFor="email">Votre email: </label>
                <input type="email" name="email"/>
        
                <label htmlFor="message">Votre message: </label>
                <textarea name="message"></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>

        <Footer />
    </div>
  )
}

export default Contact