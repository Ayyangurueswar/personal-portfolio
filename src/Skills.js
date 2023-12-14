import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJs, faHtml5, faCss3, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className='skills_container'>
      <div>
        <h3>Skills:</h3>
        <div className='skill_list'>
          <div className='skill'>
            <h4>Web technologies</h4>
            <ul>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faReact} spin size='lg'/></span> React.js</li>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faJs} beat size='lg'/></span> JavaScript</li>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faReact} spin size='lg'/></span> react-redux</li>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faBootstrap} flip size='lg'/></span> Bootstrap</li>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faCss3} flip size='lg'/></span> CSS</li>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faHtml5} flip size='lg'/></span> HTML</li>
            </ul>
          </div>
          <div className='skill'>
            <h4>Programming languages</h4>
            <ul>
              <li><span className='skill_icon'><i className="devicon-cplusplus-plain"></i></span> C++</li>
              <li><span className='skill_icon'><i className="devicon-c-plain"></i></span> C</li>
              <li><span className='skill_icon'><FontAwesomeIcon icon={faPython} beat size='lg'/></span> Python</li>
            </ul>
          </div>
          <div className='skill'>
            <h4>Others</h4>
            <ul className='other_list'>
              <li>Object Oriented Programming</li>
              <li>Internet of Things</li>
            </ul>
          </div>
        </div>
        </div>
      <div>
        <h3>Certifications:</h3>
        <div className='certifications'>
          <a href='https://drive.google.com/file/d/1TYuO2ofp1HgENRrCydOXZ05wq-o1diA0/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h4>MERN stack web development internship</h4>
              <div className='overlay'>
                <p>Certificate of completion of internship at webstack academy</p>
              </div>
            </div>
          </a>
          <a href='https://drive.google.com/file/d/1bUGq8S1gtsF3_LDYN4JfemJxTn-Uxe7g/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h4>Programming using JavaScript</h4>
              <div className='overlay'>
                <p>Certificate of completion of course - JavaScript in Infosys Springboard</p>
              </div>
            </div>
          </a>
          <a href='https://www.hackerrank.com/certificates/70c8844302af' className='cert'>
            <div className='cert_wrapper'>
              <h4>Python Basics</h4>
              <div className='overlay'>
                <p>Python - 5 star rated at HackerRank</p>
              </div>
            </div>
          </a>
          <a href='https://drive.google.com/file/d/1LJK_-G4G3Pg8lLDuTBJg-TsgxB7D_Tv7/view?usp=sharing' className='cert'>
            <div className='cert_wrapper'>
              <h4>IoT internship</h4>
              <div className='overlay'>
                <p>Certificate of completion of internship at Emertxe Information Technologies</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills
