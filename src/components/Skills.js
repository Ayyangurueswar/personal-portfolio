import { faBootstrap, faCss3, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import Fade from 'react-reveal/Fade'

const CustomToolTip = ({itemData, series}) => {
  return (
    <div className='bg-warning-subtle p-2 rounded'>
      <h5>{series.data[itemData.dataIndex].label}</h5>
      {itemData.dataIndex === 0 ? (<ul className='list-unstyled'>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faReact}/> React.js</li>
        <li className='d-flex gap-2 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{width: '20px', height: '15px'}}><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg> 
         Next.js</li>
        <li className='d-flex gap-2 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="15px"><path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"/></svg> 
        Express.js</li>
        <li className='d-flex gap-2 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{width: '20px', height: '15px'}}><path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"/></svg>
 Redux</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faJs}/> TypeScript</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faJs}/> JavaScript</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faHtml5}/> HTML</li>
        <li className='d-flex gap-2 align-items-center' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{width: '20px', height: '15px'}}><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>
 Tailwind CSS</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faBootstrap}/> Bootstrap</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faCss3}/> CSS</li>
      </ul>) : itemData.dataIndex === 1 ? (
        <ul className='list-unstyled'>
          <li className='d-flex gap-2 align-items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width='20px' height='15px' alt=''/>
           C++</li>
          <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faC}/> C</li>
          <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faPython}/>Python</li>
        </ul>
      ) : (
        <ul>
          <li>Strapi CMS</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Object oriented Programming</li>
        </ul>
      )}
    </div>
  )
}

const Skills = () => {
  const skills = [{
    id: 0,
    value: 65,
    label: 'Web technologies',
    color: 'rgb(91, 220, 91)'
  },
  {
    id: 1,
    value: 25,
    label: 'Programming languages',
    colors: 'rgb(79, 132, 211)'
  },
  {
    id: 2,
    value: 10,
    label: 'Others',
    color: 'rgb(225, 77, 225)'
  }]
  return (
    <div className='skills_container mt-5 px-5' id='skills'>
      <Fade bottom>
      <div>
        <h3 className='text-decoration-underline'>Skills:</h3>
        <span>(hover to see more)</span>
        <PieChart series={[{
          data: skills,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        }]}
        slotProps={{legend: {hidden: true}}}
        margin={{top: 0, bottom: 0, left:0, right:0}}
        height={300}
        tooltip={{trigger: 'item', itemContent: CustomToolTip}}>
        </PieChart>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '2rem' }}>
            {skills.map((entry, index) => (
              <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: index === 1 ? 'rgb(79, 132, 211)' : entry.color, marginRight: '5px' }}></div>
                <span>{entry.label}</span>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h3 className='mb-4 mt-5 text-decoration-underline'>Certifications:</h3>
        <div className='certifications'>
          <a href='https://drive.google.com/file/d/1d3lVHeHC9fmldRbPiSc4_813D6A9v7xS/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>Full stack development internship</h5>
              <div className='overlay'>
                <p>Certificate of completion of internship at Pie Multilingual Services private limited</p>
              </div>
            </div>
          </a>
          <a href='https://drive.google.com/file/d/1U_4_WqmEzYOXJnWx60qf6f3n_Z8-e-pX/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>Frontend development internship</h5>
              <div className='overlay'>
                <p>Certificate of completion of internship at Runon private limited</p>
              </div>
            </div>
          </a>
          <a href='https://drive.google.com/file/d/1X2YQ3goiA0O0OXghHO4Ft0LLHwbyz0jg/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>React.js Development Internship</h5>
              <div className='overlay'>
                <p>Certificate of completion of training and internship at Freshtronics Private Limited.</p>
              </div>
            </div>
          </a>
          <a href='https://www.freecodecamp.org/certification/fcc8aed5ebd-e202-4429-8296-535d9b09857d/javascript-algorithms-and-data-structures' className='cert'>
            <div className='cert_wrapper'>
              <h5>JavaScript data structures and algorithms</h5>
              <div className='overlay'>
                <p>Certificate of completion of course JavaScript data structures and algorithms from freeCodeCamp</p>
              </div>
            </div>
          </a>
          <a href='https://drive.google.com/file/d/1BcNAkBxN61bfJ3g0rFu50hePYgu5aBw4/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>Programming using React.js</h5>
              <div className='overlay'>
                <p>Certificate of completion of course - React.js, in Infosys Springboard</p>
              </div>
            </div>
          </a>
          <a href='https://www.hackerrank.com/certificates/70c8844302af' className='cert'>
            <div className='cert_wrapper'>
              <h5>Python Basics</h5>
              <div className='overlay'>
                <p>Python - 5 star rated at HackerRank</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Skills
