import React from 'react'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'

const Projects = () => {
  return (
    <div className='px-5'>
      <h2 className='my-4'>Projects:</h2>
      <div id="carouselExampleCaptions" className="carousel slide project mx-auto" style={{width: '70%'}} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-danger" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='bg-danger' aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='bg-danger' aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className='bg-danger' aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className='bg-danger' aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="7000">
            <a href='https://eventssite.vercel.app' className='d-block w-100'>
              <img src={project5} alt='events-site' className='card_image'></img>
            </a>
            <div style={{height: '18rem'}} className='d-flex flex-column align-items-center justify-content-center'>
              <h4>Event management site</h4>
              <p>A full stack event management site created using Next.js and Strapi CMS.</p>
              <div className='features'>
                <h5>Features:</h5>
                <ul>
                  <li>Allows all users to view events and authenticated users to view, upload and edit events.</li>
                  <li>Restricts users to edit or delete the events they own</li>
                  <li>PostgreSQL is used as the database and cloudinary is used for storing images.</li>
                  <li>Fully styled using Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <a href='https://github.com/Ayyangurueswar/food-delivery-app'>
              <img src={project3} alt='food-delivery-app' className='card_image'></img>
            </a>
            <div style={{height: '18rem'}} className='d-flex flex-column align-items-center justify-content-center'>
              <h4>Food Delivery App</h4>
              <p>A food delivery app created using MERN stack technologies</p>
              <div className='features'>
                <h5>Features</h5>
                <ul>
                  <li>Allows the user to place and view orders</li>
                  <li>Added user authentication</li>
                  <li>Integrated third party APIs like mailtrap(for user authentication) and stripe(for payments)</li>
                </ul>
              </div>
              <a href='https://www.youtube.com/watch?v=okGTQ4LMmMM' className='demo mt-1 fs-5'>Demo</a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <a href='https://ayyangurueswar.github.io/test-app/'>
              <img src={project4} alt='markdown previewer' className='card_image'></img>
            </a>
            <div style={{height: '18rem'}} className='d-flex flex-column align-items-center justify-content-center'>
              <h4>Markdown Previewer</h4>
              <p>Markdown Previewer built using React and Marked library</p>
              <div className='features'>
                <h5>Features</h5>
                <ul>
                  <li>Renders github flavoured markdown as HTML elements</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="7000">
            <a href='https://github.com/Ayyangurueswar/tic-tac-toe-game'>
              <img src={project2} alt='tic-tac-toe-game' className='card_image'></img>
            </a>
            <div style={{height: '18rem'}} className='d-flex flex-column align-items-center justify-content-center'>
              <h4>Tic Tac Toe game</h4>
              <p>A simple Tic Tac Toe game created using React.js</p>
              <div className='features'>
                <h5>Features</h5>
                <ul>
                  <li>Allows the user to track the moves</li>
                  <li>Moves can be sorted in either ascending or descending order</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <a href='https://ayyangurueswar.github.io/bouncing-balls-game/'>
              <img src={project1} alt='bouncing-balls-game' className='card_image'></img>
            </a>
            <div style={{height: '18rem'}} className='d-flex flex-column align-items-center justify-content-center'>
              <h4>Bouncing balls game</h4>
              <p>Simple bouncing balls game created using JavaScript, CSS and HTML</p>
              <div className='features'>
                <h5>Controls:</h5>
                <ul>
                  <li>W - Move up</li>
                  <li>S - Move down</li>
                  <li>A - Move left</li>
                  <li>D - Move right</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="fs-1 carousel_next" aria-hidden="true">&lt;</span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="fs-1 carousel_next" aria-hidden="true">&gt;</span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Projects