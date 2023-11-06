import React from 'react'

const About = () => {
  return (
    <div className='about_container'>
      <img src='../public/images/ayyan.jpg' alt='ayyan'/>
      <p>Hi there, This is Ayyan Guru Eswar - A passionate frontend developer well versed
        in React.js and with strong basics of HTML, CSS and JavaScript
      </p>
      <div className='nav_section'>
        <button>Projects</button>
        <button>Skills</button>
        <button>View Resume</button>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default About
