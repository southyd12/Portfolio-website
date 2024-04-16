// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Contact() {
  return (
    <>
      <div className='contact-wrapper'>
        <p className='first-contact-message'>Fancy a chat?</p>
        <p className='second-contact-message'>Get in touch!</p>
        <div className='contact-links-wrapper'>
          <a className="contact-links" href="https://www.linkedin.com/in/daniel-south-6508a518/">
          <FontAwesomeIcon icon={faLinkedin} alt="linkedin logo" className="linkedin-logo-contact" />
          </a>
          <a className="contact-links" href="mailto:southd12@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} alt="envelope" className="email-envelope-contact" />
          </a>
        </div>
        
      </div>
      
    </>
    
  )
}

export default Contact