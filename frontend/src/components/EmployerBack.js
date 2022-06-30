import React from 'react'
import { Card } from 'react-bootstrap'

const EmployerBack = (props) => {
  return (
    <>
      <i
        onClick={props.close}
        class='fa-solid fa-circle-xmark ml-auto display-4  p-3'
      ></i>
      <Card.Body>
        <span style={{ fontSize: '2rem' }}>{props.title}</span>
        <br></br>
        <p className='py-3'>
          {props.start} - {props.end}
        </p>

        <p>{props.description}</p>
        <p style={{ fontSize: '1.5rem', margin: '32px 0' }}>
          Accomplishments and Achievements
        </p>
        <ul className='list-group-flush'>
          {props.accomplishments.map((accomplishment) => {
            return (
              <li style={{ listStyleType: 'square', padding: '16px' }}>
                {accomplishment}
              </li>
            )
          })}
        </ul>
      </Card.Body>
    </>
  )
}

export default EmployerBack
