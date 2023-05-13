import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function Account (props) {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default Account