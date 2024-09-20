import React from 'react'
import projects from '../lib/projects'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <div className='px-5' id='projects'>
      <Fade bottom>
      <h2 className='my-4 text-decoration-underline'>Projects:</h2>
      <div id="carouselExampleCaptions" className="carousel slide project mx-auto" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {
            projects.map((project) => (
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={String(project.id-1)} className={`bg-light ${project.id-1 === 0 ? 'active' : ''}`} aria-label={project.title} key={project.id}></button>
            ))
          }
        </div>
        <div className="carousel-inner">
          {
            projects.map((project) => (
              <ProjectCard project={project} key={project.id}/>
            ))
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <p className="fs-1 mb-0" aria-hidden="true">&lt;</p>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="fs-1" aria-hidden="true">&gt;</span>
        </button>
      </div>
      </Fade>
    </div>
  )
}

export default Projects