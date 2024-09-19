import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className={`carousel-item ${project.id === 1 ? 'active' : ''}`} data-bs-interval="7000">
        <a href={project.projectURL}>
            <img src={project.image} alt={project.title} className='card_image'></img>
        </a>
        <div className='overlay d-md-block d-flex align-items-center justify-content-center'>
        <h4 className='d-md-none text-center p-3 text-light'>{project.title}</h4>
        <div style={{height: '18rem', position: 'absolute', top: '50%', color: 'white'}} className='d-md-flex d-none flex-column align-items-center justify-content-center w-100'>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className='features'>
            <h5>{project.id === 6 ? 'Controls' : 'Features'}</h5>
            <ul>
                {
                    project.features.map((feature, index) => {
                        return <li key={index}>{feature}</li>
                    })
                }
            </ul>
            </div>
            {project.demoLink && <a href={project.demoLink} className='demo mt-1 fs-5 text-light'>Demo</a>}
        </div>
        </div>
    </div>
  )
}

export default ProjectCard