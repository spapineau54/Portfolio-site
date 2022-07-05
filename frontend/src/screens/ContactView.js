import React from 'react'
import { Container } from 'react-bootstrap'

const ContactView = () => {
  return (
    <Container
      style={{ maxWidth: '80vw' }}
      fluid
      className='d-flex flex-column flex-md-row justify-content-between align-items-center display-2 py-3 text-center'
    >
      <Container
        as='div'
        className='d-flex flex-column justify-content-between align-content-center m-3'
      >
        <a
          href='mailto:s_papineau@outlook.com'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa-solid fa-envelope'></i>

          <h2>Email</h2>
        </a>
      </Container>
      <Container
        as='div'
        className='d-flex flex-column align-content-center m-3'
      >
        <a href='tel:5866015723' rel='noreferrer'>
          <i class='fa-solid fa-mobile '></i>

          <h2>Phone</h2>
        </a>
      </Container>
      <Container
        as='div'
        className='d-flex flex-column align-content-center m-3'
      >
        <a
          href='https://www.linkedin.com/in/shawn-papineau'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fa-brands fa-linkedin'></i>
          <h2>LinkedIn</h2>
        </a>
      </Container>
    </Container>
  )
}

export default ContactView
