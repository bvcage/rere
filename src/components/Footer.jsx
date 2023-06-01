import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer (props) {
  return (
    <Container fluid style={{position: 'absolute', bottom: 0, left: 0}}>
      <Row>
        <Col></Col>
        <Col style={{textAlign: 'center'}}>Re:RE © 2023</Col>
        <Col style={{textAlign: 'right'}}>Bailey Cage</Col>
      </Row>
    </Container>
  )
}

export default Footer