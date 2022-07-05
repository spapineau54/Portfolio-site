import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Shawn Papineau</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/resume'>
                <Nav.Link>
                  <i className='fa-solid fa-laptop-code p-1'></i> Experience
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link className='mx-2'>
                  <i class='fa-solid fa-handshake-angle p-1'></i> Why Hire Me?
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link className='mx-2'>
                  <i className='fa-solid fa-envelope p-1'></i> Get In Touch
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
