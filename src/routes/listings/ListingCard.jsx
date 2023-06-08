import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ListingCard (props) {
  const { listing } = props
  const navigate = useNavigate()

  const genStreetAddress = (listing) => {
    return `
      ${ !!listing.street_number ? listing.street_number : '' }
      ${ !!listing.street_name ? listing.street_name : '' }
      ${ !!listing.unit_number ? ', ' + listing.unit_number : '' }
    `
  }

  const genMunicipalityAddress = (listing) => {
    return `
      ${ !!listing.city ? listing.city + ',' : '' }
      ${ !!listing.state ? listing.state : '' }
      ${ !!listing.postal_code ? listing.postal_code : '' }
    `
  }

  return (
    <Card onClick={()=>navigate(listing.id)}>
      <Card.Body>
        <Card.Title>{genStreetAddress(listing)}</Card.Title>
        <Card.Subtitle>{genMunicipalityAddress(listing)}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default ListingCard