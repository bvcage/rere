import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

function RootTemplate (props) {
  return (
    <Container style={{minHeight: '100vh', position: 'relative'}}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default RootTemplate