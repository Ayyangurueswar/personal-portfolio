import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import pic from './images/ayyan.jpg';
import sidepic1 from './images/Dart-Aim-Transparent.png';
import sidepic2 from './images/oz891c1p.png';

const About = () => {
  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-center gap-5'>
        <div className='container-fluid text-center d-flex flex-column gap-5'>
          <Fade bottom>
            <img className='rounded-circle pic mt-5' src={pic} alt='ayyan' />
          </Fade>
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
      <div className='timeline'>
        <Fade bottom>
          <h2 className='text-center mb-5'>Journey so far...</h2>
        </Fade>
        <Fade bottom>
        <Timeline position='alternate'>
          <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                2019-2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='error'>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Higher Secondary education
              </Typography>
              <Typography>Science with mathematics.
                Percentage: 93%.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='secondary'>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Indian Institute of Information Technology Tiruchirappalli
              </Typography>
              <Typography>
                B.Tech in Electronics and Communication Engineering. CGPA: 7.92.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                08/2023 - 09/2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary'>
                <BusinessOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                MERN Stack web development internship
              </Typography>
              <Typography>
                Worked on a food delivery website using MERN stack technologies.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </Fade>
      </div>
      <div className='container-fluid d-flex flex-column gap-5' id='side_content'>
        <Fade bottom>
          <div className='container-fluid d-flex flex-row border-primary border-5 justify-content-center
          gap-5'>
            <img src={sidepic1} alt='journey' className='rounded-circle side_pic' />
              <div className='side_desc'>
                <h2 className='h3'>What I aim for</h2>
                <p className='fs-5'>
                  I look forward to contribute to real world projects by collaborating with like minded people
                  and gain some valuable knowledge.
                </p>
              </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='container-fluid d-flex flex-row border-primary border-5 justify-content-center
          gap-5'>
            <img src={sidepic2} alt='journey' className='rounded-circle side_pic' />
              <div className='side_desc'>
                <h2 className='h3'>Personal interests</h2>
                <p className='fs-5'>Mostly it's coding and when it's not I love watching football and eSports</p>
              </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default About
