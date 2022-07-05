import React from 'react'
import { Card, Button } from 'react-bootstrap'
import EmployerBack from './EmployerBack'
import { useState } from 'react'

const Employer = ({ employer }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const handleClick = () => {
    console.log('clicked')
    setIsExpanded(!isExpanded)
  }

  return (
    <Card
      style={{ borderRadius: '20px' }}
      isExpanded={isExpanded}
      className='m-3   bg-dark text-white shadow'
    >
      {isExpanded ? (
        <>
          <Card.Img
            style={{
              maxWidth: '100%',
              overflow: 'hidden',
              padding: '32px',
            }}
            variant='top'
            src={employer.logo}
          />
          <Card.Body>
            <Card.Title>{employer.name}</Card.Title>
            <Card.Text>{employer.title}</Card.Text>
          </Card.Body>
          <Button
            styles={{ borderRadius: '20px' }}
            className='w-75  align-self-center rounded-pill'
            variant='outline-info'
            onClick={handleClick}
          >
            Learn More
          </Button>
          <Card.Footer>
            <small className='text-muted'>{employer.location}</small>
          </Card.Footer>{' '}
        </>
      ) : (
        <>
          <EmployerBack
            start={employer.start}
            end={employer.end}
            title={employer.title}
            close={handleClick}
            description={employer.description}
            accomplishments={employer.accomplishments}
          />
        </>
      )}
    </Card>
  )
}

export default Employer
