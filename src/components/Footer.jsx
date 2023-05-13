import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer (props) {
  return (
    <Container fluid style={{position: 'absolute', bottom: 0}}>
      <Row>
        <Col>footer</Col>
      </Row>
    </Container>
  )
}

export default Footer