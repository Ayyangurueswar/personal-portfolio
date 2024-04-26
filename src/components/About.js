import React from 'react'
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
import pic from '../images/ayyan.jpg';
import sidepic1 from '../images/Dart-Aim-Transparent.png';
import sidepic2 from '../images/oz891c1p.png';

const About = () => {
  return (
    <>
      <div className='mx-auto text-center d-flex align-items-center gap-5 px-5 mt-5 flex-column flex-md-row' style={{width: '85%'}}>
        <Fade bottom>
          <img className='rounded-circle pic' src={pic} alt='ayyan' />
        </Fade>
        <Fade left>
          <p className='fs-3'>Hi there, This is Ayyan Guru Eswar - Frontend developer well versed
            in React.js and with strong basics of HTML, CSS and JavaScript.
          </p>
        </Fade>
      </div>
      <div className='my-5'>
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
                02/2024 - 03/2024
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
                Frontend developer at Runon private limited
              </Typography>
              <Typography>
                Contributed in developing the quiz and dashboard sections of a no-code website building platform.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </Fade>
      </div>
      <div className='container-fluid d-flex flex-column align-items-center gap-5 my-5'>
        <Fade bottom>
          <div className='w-75 d-flex flex-row justify-content-around'>
            <img src={sidepic1} alt='journey' className='rounded-circle side_pic' />
            <div className='w-50'>
              <h2 className='h3'>What I aim for</h2>
              <p className='fs-5'>
                I look forward to contribute to real world projects by collaborating with like minded people
                and gain some valuable knowledge.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='w-75 d-flex flex-row justify-content-around gap-5'>
            <img src={sidepic2} alt='journey' className='rounded-circle side_pic' />
            <div style={{width: '52%'}}>
              <h2 className='h3'>Personal interests</h2>
              <p className='fs-5'>Mostly it's coding and when it's not I love watching football and playing eSports</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default About
