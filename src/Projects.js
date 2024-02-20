import React from 'react'
import Slide from 'react-reveal/Slide'
import project1 from './images/project1.png'
import project2 from './images/project2.png'
import project3 from './images/project3.png'
import project4 from './images/project4.png'
import project5 from './images/project5.png'

const Projects = () => {
  return (
      <div className='project_container'>
        <Slide left>
          <div className='project'>
            <a href='https://eventssite.vercel.app' className='card_container'>
              <img src={project5} alt='events-site' className='card_image'></img>
            </a>
            <div className='description'>
              <h3>Event management site</h3>
              <p>A full stack event management site created using Next.js and Strapi CMS.</p>
            </div>
            <div className='features'>
              <h4>Features:</h4>
              <ul>
                <li>Allows all users to view events and authenticated users to view, upload and edit events.</li>
                <li>Restricts users to edit or delete the events they own</li>
                <li>PostgreSQL is used as the database and cloudinary is used for storing images.</li>
                <li>Fully styled using Tailwind CSS</li>
              </ul>
            </div>
        </div>
        </Slide>
        <Slide left>
          <div className='project'>
            <a href='https://github.com/Ayyangurueswar/food-delivery-app' className='card_container'>
              <img src={project3} alt='food-delivery-app' className='card_image'></img>
            </a>
            <div className='description'>
              <h3>Food Delivery App</h3>
              <p>A food delivery app created using MERN stack technologies</p>
            </div>
            <div className='features'>
              <h4>Features</h4>
              <ul>
                <li>Allows the user to place and view orders</li>
                <li>Added user authentication</li>
                <li>Integrated third party APIs like mailtrap(for user authentication) and stripe(for payments)</li>
              </ul>
            </div>
            <a href='https://www.youtube.com/watch?v=okGTQ4LMmMM' className='demo'>Demo</a>
          </div>
        </Slide>
        <Slide left>
          <div className='project'>
            <a href='https://github.com/Ayyangurueswar/tic-tac-toe-game' className='card_container'>
              <img src={project2} alt='tic-tac-toe-game' className='card_image'></img>
            </a>
            <div className='description'>
              <h3>Tic Tac Toe game</h3>
              <p>A simple Tic Tac Toe game created using React.js</p>
            </div>
            <div className='features'>
              <h4>Features</h4>
              <ul>
                <li>Allows the user to track the moves</li>
                <li>Moves can be sorted in either ascending or descending order</li>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className='project'>
            <a href='https://ayyangurueswar.github.io/test-app/' className='card_container'>
              <img src={project4} alt='markdown previewer' className='card_image'></img>
            </a>
            <div className='description'>
              <h3>Markdown Previewer</h3>
              <p>Markdown Previewer built using React and Marked library</p>
            </div>
            <div className='features'>
              <h4>Features</h4>
              <ul>
                <li>Renders github flavoured markdown as HTML elements</li>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className='project'>
            <a href='https://ayyangurueswar.github.io/bouncing-balls-game/' className='card_container'>
              <img src={project1} alt='bouncing-balls-game' className='card_image'></img>
            </a>
            <div className='description'>
              <h3>Bouncing balls game</h3>
              <p>Simple bouncing balls game created using JavaScript, CSS and HTML</p>
            </div>
            <div className='features'>
              <h4>Controls:</h4>
              <ul>
                <li>W - Move up</li>
                <li>S - Move down</li>
                <li>A - Move left</li>
                <li>D - Move right</li>
              </ul>
            </div>
        </div>
        </Slide>
      </div>
  )
}

export default Projects
