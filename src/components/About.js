import React from 'react'
import Fade from 'react-reveal/Fade'
import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineOppositeContent, Timeline, TimelineConnector, TimelineDot, TimelineContent, TimelineItem, TimelineSeparator } from '@mui/lab';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import pic from '../images/ayyan.webp';
import sidepic1 from '../images/Dart-Aim-Transparent.webp';
import sidepic2 from '../images/oz891c1p.webp';

const About = () => {
  return (
    <>
      <div className='d-flex align-items-center justify-content-between flex-column flex-md-row mt-4' id='about'>
        <Fade bottom>
          <img className='rounded-circle pic mb-5 mt-5 mt-md-0' src={pic} alt='ayyan'/>
        </Fade>
        <Fade bottom>
        <div className='mb-5 about_aside'>
          <p className='fs-3 mb-4 text-center'>Hi there, This is Ayyan Guru Eswar - Frontend developer with experience building web applications 
            using Next.js and React.js.  I'm always excited to learn about the latest technologies and apply them to create awesome web experiences.
          </p>
          <a href='https://drive.google.com/file/d/1buIer4es7AFPOOxiFRYQAhL2jrhTWD9Y/view?usp=sharing' className='menu_btn px-4 py-2'>View resume</a>
        </div>
        </Fade>
      </div>
      <div className='mb-5 mt-xl-5'>
        <Fade bottom>
          <h3 className='text-center mb-3 text-decoration-underline'>Journey so far...</h3>
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
              B.Tech in Electronics and Communication Engineering
              </Typography>
              <Typography>
                from Indian Institute of Information Technology Tiruchirappalli. CGPA: 7.92.
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
          <TimelineItem>
          <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                05/2024 - 06/2024
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
                React.js developer at Freshtronics Technologies
              </Typography>
              <Typography>
                Developed reusable React and React Native components for a healthcare application.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
              >
                06/2024 - 08/2024
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
                Full stack developer at Pie Multilingual Services Private Limited
              </Typography>
              <Typography>
                Worked on the re-development of the company's official website using Next.js and Strapi CMS.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </Fade>
      </div>
      <div className='container-fluid d-flex flex-column align-items-center gap-5 mt-5'>
        <Fade bottom>
          <div className='w-75 d-flex flex-row justify-content-around'>
            <img src={sidepic1} alt='journey' className='rounded-circle side_pic' />
            <div className='w-50'>
              <h4>What I aim for:</h4>
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
              <h4>Personal interests</h4>
              <p className='fs-5'>Mostly it's coding and when it's not I love watching football and playing eSports</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default About
