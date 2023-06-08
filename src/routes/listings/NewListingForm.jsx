import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { AUTH, DB } from '../../firebaseConfig'

function NewListingForm (props) {
  const navigate = useNavigate()
  const [listingURL, setListingURL] = React.useState('')
  const [validated, setValidated] = React.useState(false)
  const user = AUTH.currentUser

  function handleSubmit (e) {
    e.preventDefault()
    if (listingURL.includes('redfin') && !!user.uid) {
      addDoc(collection(DB, 'requests'), {
        'url': listingURL,
        'user_uid': user.uid,
        'completed': false,
        'created_TS': serverTimestamp()
      }).then(ref => {
        addDoc(collection(DB, 'users', user.uid, 'requests'), {
          'request_uid': ref.id,
          'created_TS': serverTimestamp()
        }).then(ref2 => {
          if (!!ref2.id) navigate('/')
        })
      })
    } else {
      console.log('We do not support this website.')
    }
    if (!validated) setValidated(true)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col>
            <h2>Request an Address Listing</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Enter URL below to request a listing be added to our database.
              <br />
              Note that we currently support only the following sites: Redfin
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel label='Listing URL'>
              <Form.Control
                name='listingURL'
                placeholder=' '
                required
                type='text'
                value={listingURL}
                onChange={e => setListingURL(e.target.value)}
                />
            </FloatingLabel>
          </Col>
          <Col xs={12} sm={3} md={2}>
            <Button type='submit' style={{height: '100%', width: '100%'}}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default NewListingForm