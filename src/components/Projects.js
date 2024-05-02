import React from 'react'
import projects from '../lib/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='px-5' id='projects'>
      <h2 className='my-4 text-decoration-underline'>Projects:</h2>
      <div id="carouselExampleCaptions" className="carousel slide project mx-auto" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {
            projects.map((project) => (
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={String(project.id-1)} className={`bg-danger ${project.id-1 === 0 ? 'active' : ''}`} aria-label={project.title} key={project.id}></button>
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
        <button className="carousel-control-prev carousel_next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <p className="fs-1 mb-0" aria-hidden="true">&lt;</p>
        </button>
        <button className="carousel-control-next carousel_next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="fs-1" aria-hidden="true">&gt;</span>
        </button>
      </div>
    </div>
  )
}

export default Projects