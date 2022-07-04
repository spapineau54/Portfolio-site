import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({ project }) => {
  return (
    <Card
      style={{ maxWidth: '100vw', borderRadius: '20px' }}
      className='m-3   bg-dark text-white shadow p-5'
    >
      <Card.Img
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
          padding: '32px',
        }}
        variant='top'
        src={project.hero}
      />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle>
          <ul className='list-group-flush text-white list-unstyled'>
            {project.tech.map((tech) => {
              return <li style={{ padding: '16px' }}>{tech}</li>
            })}
          </ul>
        </Card.Subtitle>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Project
