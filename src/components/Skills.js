import { faBootstrap, faCss3, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';

const CustomToolTip = ({itemData, series}) => {
  return (
    <div className='bg-warning-subtle p-2 rounded'>
      <h5>{series.data[itemData.dataIndex].label}</h5>
      {itemData.dataIndex === 0 ? (<ul className='list-unstyled'>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faReact}/> React.js</li>
        <li className='d-flex gap-2 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{width: '20px', height: '15px'}}><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg> 
         Next.js</li>
        <li className='d-flex gap-2 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{width: '20px', height: '15px'}}><path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"/></svg>
 Redux</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faJs}/> JavaScript</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faHtml5}/> HTML</li>
        <li className='d-flex gap-2 align-items-center' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{width: '20px', height: '15px'}}><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>
 Tailwind CSS</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faBootstrap}/> Bootstrap</li>
        <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faCss3}/> CSS</li>
      </ul>) : itemData.dataIndex === 1 ? (
        <ul className='list-unstyled'>
          <li className='d-flex gap-2 align-items-center'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width='20px' height='15px'><path d="M435.2793884,113.2840881L247.1911163,4.6924829c-10.8347626-6.2566438-28.5671387-6.2566438-39.4019012,0L19.7009449,113.2840881C8.864645,119.5393753,0,134.8957062,0,147.4076385v217.1847382c0.8429857,14.5713501,8.2855635,26.6393127,19.7009449,34.1234741l188.0882721,108.5915833c10.8347626,6.2567749,28.5671387,6.2567749,39.4019012,0l188.0882721-108.5915833c12.2479248-8.1462708,19.2193298-20.4076233,19.7009277-34.1234741V147.4076385C454.5403748,134.2429352,446.6565552,120.9648895,435.2793884,113.2840881z M75.8300552,256.0007019c-0.8911743-148.0888062,197.459137-213.4790344,282.9962769-75.8776245l-65.6346436,37.9804688c-39.6215057-65.5336304-138.0008087-42.1011963-141.5315704,37.8971558c1.0603333,73.7290649,97.7535858,107.9782104,141.536026,37.8927917L358.83078,331.872406C283.4476624,462.7354736,79.6317978,415.6530457,75.8300552,256.0007019z M379.1502686,264.425293h-16.8520813v16.8521729h-16.8491821V264.425293h-16.8521118v-16.850647h16.8521118v-16.8505554h16.8491821v16.8505554h16.8520813V264.425293z M442.34198,264.425293h-16.8520813v16.8521729h-16.8490906V264.425293h-16.8522034v-16.850647h16.8522034v-16.8505554h16.8490906v16.8505554H442.34198V264.425293z"/></svg>
           C++</li>
          <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faC}/> C</li>
          <li className='d-flex gap-2 align-items-center'><FontAwesomeIcon icon={faPython}/>Python</li>
        </ul>
      ) : (
        <ul>
          <li>Strapi CMS</li>
          <li>MongoDB</li>
          <li>Object oriented Programming</li>
        </ul>
      )}
    </div>
  )
}

const Skills = () => {
  const skills = [{
    id: 0,
    value: 60,
    label: 'Web technologies',
    color: 'rgb(91, 220, 91)'
  },
  {
    id: 1,
    value: 30,
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
    <div className='skills_container mt-4 px-5' id='skills'>
      <div>
        <h3>Skills:</h3>
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {skills.map((entry, index) => (
              <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: entry.color, marginRight: '5px' }}></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </PieChart>
      </div>
      <div>
        <h3 className='mb-4'>Certifications:</h3>
        <div className='certifications'>
          <a href='https://drive.google.com/file/d/1U_4_WqmEzYOXJnWx60qf6f3n_Z8-e-pX/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>Frontend development internship</h5>
              <div className='overlay'>
                <p>Certificate of completion of internship at Runon private limited</p>
              </div>
            </div>
          </a>
          <a href='https://drive.google.com/file/d/1TYuO2ofp1HgENRrCydOXZ05wq-o1diA0/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>MERN stack web development</h5>
              <div className='overlay'>
                <p>Certificate of completion of training and internship at webstack academy</p>
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
          <a href='https://drive.google.com/file/d/1LJK_-G4G3Pg8lLDuTBJg-TsgxB7D_Tv7/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h5>Internet of Things</h5>
              <div className='overlay'>
                <p>Certificate of completion of training and internship at Emertxe Information Technologies</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills
