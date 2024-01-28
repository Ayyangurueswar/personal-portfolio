import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFire } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
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
              <li><Link to={'/projects'} className='link'>Projects</Link></li>
              <li><Link to={'/skills'} className='link'>Skills and certifications</Link></li>
              <li><a href='https://drive.google.com/file/d/1CJVpD3E6LArch5mEoo-7rDTQdATRQRVi/view?usp=sharing' className='link'>
                  View Resume
                  </a>
              </li>
              <li><Link to={'/contact'} className='link'>Contact</Link></li>
              <li><Link to={'/'} className='link'>About</Link></li>
          </ul>
        </div>
      </div>
    </Fade>
  )
}

export default Footer
