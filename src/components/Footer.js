import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFire } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <Fade bottom>
      <div className='footer'>
        <p>
          Designed and developed with <FontAwesomeIcon icon={faHeart} bounce style={{color: "#c50d0d",}} /> and <FontAwesomeIcon icon={faFire} beat style={{color: "#c50d0d",}} /> by Ayyan.
        </p>
        <div className='links'>
          <h3>Quick links</h3>
          <ul className='link_list'>
              <li><a href='/' className='link'>Projects</a></li>
              <li><a href='/' className='link'>Skills and certifications</a></li>
              <li><a href='https://drive.google.com/file/d/1CJVpD3E6LArch5mEoo-7rDTQdATRQRVi/view?usp=sharing' className='link'>
                  View Resume
                  </a>
              </li>
              <li><a href='/' className='link'>Contact</a></li>
              <li><a href='/' className='link'>About</a></li>
          </ul>
        </div>
      </div>
    </Fade>
  )
}

export default Footer
