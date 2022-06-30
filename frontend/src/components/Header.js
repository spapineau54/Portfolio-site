import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Shawn Papineau</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/projects'>
                <i class='fa-solid fa-laptop-code p-1'></i> Experience
              </Nav.Link>
              <Nav.Link className='mx-2' href='/about'>
                <i class='fa-solid fa-handshake-angle p-1'></i> Why Hire Me?
              </Nav.Link>
              <Nav.Link className='mx-2' href='/contact'>
                <i class='fa-solid fa-envelope p-1'></i> Get In Touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
