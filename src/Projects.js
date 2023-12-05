import React from 'react'

const Projects = () => {
  return (
    <div className='project_container'>
      <div className='project'>
        <a href='https://github.com/Ayyangurueswar/food-delivery-app' className='card_container'>
          <img src='images/project3.png' alt='food-delivery-app' className='card_image'></img>
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
      </div>
      <div className='project'>
        <a href='https://github.com/Ayyangurueswar/tic-tac-toe-game' className='card_container'>
          <img src='images/project2.png' alt='tic-tac-toe-game' className='card_image'></img>
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
      <div className='project'>
        <a href='https://ayyangurueswar.github.io/bouncing-balls-game/' className='card_container'>
          <img src='images/project1.png' alt='bouncing-balls-game' className='card_image'></img>
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
    </div>
  )
}

export default Projects
