import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const About = () => {
  return (
    <div className='about_container'>
      <div className='main_content'>
        <div className='about'>
          <Zoom top>
            <img src="images/ayyan.jpg" alt='ayyan' id='pic'/>
          </Zoom>
          <p className='desc'>Hi there, This is Ayyan Guru Eswar - Frontend developer well versed
            in React.js and with strong basics of HTML, CSS and JavaScript.
          </p>
        </div>
        <div className='nav_section'>
          <Link to={'/projects'} className='btn_wrapper'>
              <button>Projects</button>
          </Link>
          <Link to={'/skills'} className='btn_wrapper'>
              <button>Skills and Certifications</button>
          </Link>
          <a href='https://drive.google.com/file/d/1TrVMXYO4QXPp_m-kd_qUEmZOlw2Ktgs4/view?usp=sharing' className='btn_wrapper'>
            <button>View Resume</button>
          </a>
          <Link to={'/contact'} className='btn_wrapper'>
              <button>Contact</button>
          </Link>
        </div>
      </div>
      <div className='side_content'>
        <Fade bottom>
          <div className='journey'>
            <img src='images/winding-road-vector-1056740.jpg' alt='journey' className='side_pic' />
            <div className='side_desc'>
              <h2>Journey so far...</h2>
              <p>
                I completed my higher secondary education in 2021 with a score of 93.2% and
                currently pursuing B.Tech in Electronics and Communication Engineering at Indian Institute of
                Information Technology Tiruchirappalli.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='aim'>
            <img src='images/Dart-Aim-Transparent.png' alt='aim' className='side_pic'/>
            <div className='side_desc'>
              <h2>What I aim for</h2>
              <p>
                I look forward to contribute to real world projects by collaborating with like minded people
                and gain some valuable knowledge.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='personal_interest'>
            <img src='images/oz891c1p.png' alt='interest' className='side_pic' />
            <div className='side_desc'>
              <h2>Personal interests</h2>
              <p>Mostly it's coding and when it's not I love watching football and eSports</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default About
