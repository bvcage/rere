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
            <Nav>
              <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={()=>navigate('about')}>About</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link onClick={()=>navigate('/account/login')}>Login</Nav.Link>
              <Nav.Link onClick={()=>navigate('/account/signup')}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header