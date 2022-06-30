import React from 'react'
import hero from '../headshot.jpg'
import { Container, Image, Button, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const HomeView = () => {
  return (
    <>
      <Container
        fluid
        as='div'
        className='d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center p-5'
      >
        <Container className='text-center display-4'>
          <p>Howdy. My Name is Shawn.</p>
          <p>I am a Developer.</p>
          <LinkContainer to='/resume'>
            <Nav.Link>
              <Button
                className='w-75 rounded-pill  align-self-center'
                variant='outline-info'
              >
                Check Out My Work
              </Button>
            </Nav.Link>
          </LinkContainer>
        </Container>
        <Container fluid as='div'>
          <Image
            style={{ borderRadius: '25px' }}
            className='h-100 w-100'
            src={hero}
          />
        </Container>
      </Container>
    </>
  )
}

export default HomeView
