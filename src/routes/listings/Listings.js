import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { collection, getDocs } from 'firebase/firestore'
import { DB } from '../../firebaseConfig'

import ListingCard from './ListingCard'

function Listings (props) {
  const [listings, setListings] = React.useState([])

  React.useEffect(() => {
    getDocs(collection(DB, 'listings'))
      .then(res => setListings(res.docs.map(doc => ({'id': doc.id, ...doc.data()}))))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <Row>
        {listings.map(item => <Col xs={12} sm={6} md={4}><ListingCard listing={item} /></Col>)}
      </Row>
    </Container>
  )
}

export default Listings