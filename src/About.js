import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about_container'>
      <img src="/images/ayyan.jpg" alt='ayyan' className='pic'/>
      <p>Hi there, This is Ayyan Guru Eswar - A passionate frontend developer well versed
        in React.js and with strong basics of HTML, CSS and JavaScript
      </p>
      <div className='nav_section'>
        <Link to={'/projects'} className='btn_wrapper'>
            <button>Projects</button>
        </Link>
        <Link to={'/skills'} className='btn_wrapper'>
            <button>Skills and Certifications</button>
        </Link>
        <a href='https://drive.google.com/file/d/1UE0-5N-pdQ-r1TNXXotGYmMYpXDrvk4_/view?usp=sharing' className='btn_wrapper'>
          <button>View Resume</button>
        </a>
        <Link to={'/contact'} className='btn_wrapper'>
            <button>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default About
