import React from 'react'

const Skills = () => {
  return (
    <div className='skills_container'>
      <h1>Skills:</h1>
      <div className='skill_list'>
        <div className='skill'>
          <h3>Web technologies</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>react-redux</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className='skill'>
          <h3>Programming languages</h3>
          <ul>
            <li>C++</li>
            <li>C</li>
            <li>Python</li>
          </ul>
        </div>
        <div className='skill'>
          <h3>Others</h3>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Internet of Things</li>
          </ul>
        </div>
      </div>
      <h1>Certifications</h1>
      <div className='certifications'>
        <a href='https://drive.google.com/file/d/1TYuO2ofp1HgENRrCydOXZ05wq-o1diA0/view?usp=sharing' className='cert'>
          <div className='cert_wrapper'>
            <h3>MERN stack web development internship</h3>
            <p>Certificate of completion of internship at webstack academy</p>
          </div>
        </a>
        <a href='https://drive.google.com/file/d/1GXm2lQ1FLI5M53X3XXNr3GnhIVQuPx6q/view?usp=sharing' className='cert'>
          <div className='cert_wrapper'>
            <h3>Programming using HTML</h3>
            <p>Certificate of completion of course - HTML5 inn Infosys Springboard</p>
          </div>
        </a>
        <a href='https://www.hackerrank.com/certificates/70c8844302af' className='cert'>
          <div className='cert_wrapper'>
            <h3>Python Basics</h3>
            <p>Python - 5 star rated at HackerRank</p>
          </div>
        </a>
        <a href='https://drive.google.com/file/d/1LJK_-G4G3Pg8lLDuTBJg-TsgxB7D_Tv7/view?usp=sharing' className='cert'>
          <div className='cert_wrapper'>
            <h3>IoT internship</h3>
            <p>Certificate of completion of internship at Emertxe Information Technologies</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Skills
