import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Header (props) {
  const navigate = useNavigate()
  return (
    <Navbar
      expand='lg'
      sticky='top'
      >
        <Container fluid>
          <Navbar.Brand>Re:RE</Navbar.Brand>
          <Navbar.Toggle aria-controls='header-navbar' />
          <Navbar.Collapse id='header-navbar'>
            <Nav defaultActiveKey={'/'}>
              <Nav.Link eventKey='/' onClick={()=>navigate('/')}>Home</Nav.Link>
              <Nav.Link eventKey='about' onClick={()=>navigate('about')}>About</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header