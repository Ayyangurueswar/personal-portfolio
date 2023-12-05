import React from 'react';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <div className='contact_container'>
      <h1>Connect with me</h1>
      <div className='contacts'>
        <a href='https://www.linkedin.com/in/ayyan-guru-eswar-a64827240/' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faLinkedin} beat size="2xl" style={{color: "#d6d6d6",}} className='contact_icon'/>
        </a>
        <a href='https://github.com/Ayyangurueswar' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faGithub} beat size="2xl" style={{color: "#d6d6d6",}} className='contact_icon'/>
        </a>
        <a href='mailto:ayyan16.gbps@gmail.com' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faEnvelope} beat size='2xl' style={{color: "#d6d6d6",}} className='contact_icon'/>
        </a>
        <a href="tel:+919600588036" className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faPhone} beat size='2xl' style={{color: "#d6d6d6",}} className='contact_icon'/>
        </a>
        <a href='https://www.instagram.com/ayyanguru/' className='contact_icon_wrap'>
          <FontAwesomeIcon icon={faInstagram} beat size='2xl' style={{color: "#d6d6d6",}} className='contact_icon'/>
        </a>
      </div>
      <div className='queries'>
        <p>
          I am currently open to work in SDE intern or front-end developer intern roles so do
          get in touch if you think I can fit in.
        </p>
      </div>
    </div>
  )
}

export default Contact
