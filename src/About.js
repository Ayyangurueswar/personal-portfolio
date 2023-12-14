import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Slider from './Slider'

const About = () => {
  return (
    <>
      <div className='slider'>
        <Slider/>
      </div>
      <div className='container-fluid d-flex flex-column justify-content-center gap-5'>
        <div className='container-fluid text-center d-flex flex-column gap-5'>
          <Zoom top>
            <img className='rounded-circle pic mt-5' src='images/ayyan.jpg' alt='ayyan' />
          </Zoom>
          <Fade left>
            <p className='fs-3'>Hi there, This is Ayyan Guru Eswar - Frontend developer well versed
              in React.js and with strong basics of HTML, CSS and JavaScript.
            </p>
          </Fade>
        </div>
        <Fade bottom>
          <div className='container-fluid text-center row gap-5' id='buttons'>
              <Link className='col col-md p-4 menu_btn' to={'/projects'}>
                Projects
              </Link>
              <Link className='col col-md p-4 menu_btn' to={'/skills'}>
                Skills and Certifications
              </Link>
              <a href='https://drive.google.com/file/d/1TrVMXYO4QXPp_m-kd_qUEmZOlw2Ktgs4/view?usp=sharing' 
              className='col col-md p-4 menu_btn'>
                View Resume
              </a>
              <Link className='col col-md p-4 menu_btn' to={'/contact'}>
                Contact
              </Link>
          </div>
        </Fade>
      </div>
      <div className='container-fluid d-flex flex-column gap-5' id='side_content'>
        <Fade bottom>
          <div className='container-fluid d-flex flex-row border-primary border-5 justify-content-center
          gap-5'>
            <img src='images/winding-road-vector-1056740.jpg' alt='journey' className='rounded-circle side_pic' />
            <div className='side_desc'>
                <h2 className='h1'>Journey so far...</h2>
                <p className='fs-4'>
                  I completed my higher secondary education in 2021 with a score of 93.2% and
                  currently pursuing B.Tech in Electronics and Communication Engineering at Indian Institute of
                  Information Technology Tiruchirappalli.
                </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='container-fluid d-flex flex-row border-primary border-5 justify-content-center
          gap-5'>
            <img src='images/Dart-Aim-Transparent.png' alt='journey' className='rounded-circle side_pic' />
              <div className='side_desc'>
                <h2 className='h1'>What I aim for</h2>
                <p className='fs-4'>
                  I look forward to contribute to real world projects by collaborating with like minded people
                  and gain some valuable knowledge.
                </p>
              </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='container-fluid d-flex flex-row border-primary border-5 justify-content-center
          gap-5'>
            <img src='images/oz891c1p.png' alt='journey' className='rounded-circle side_pic' />
              <div className='side_desc'>
                <h2 className='h1'>Personal interests</h2>
                <p className='fs-4'>Mostly it's coding and when it's not I love watching football and eSports</p>
              </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default About
