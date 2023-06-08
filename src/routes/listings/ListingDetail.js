import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { DB } from '../../firebaseConfig'

import BackBtn from '../../components/BackBtn'
import ExternalSourceContainer from './ExternalSourceContainer'

function ListingDetail (props) {
  const location = useLocation()
  const id = location.pathname.split('/').pop()
  const [listing, setListing] = React.useState({})
  const [urls, setUrls] = React.useState([])
  
  React.useEffect(() => {
    if (!!id) {
      const docRef = doc(DB, "listings", id)
      getDoc(docRef)
        .then(res => setListing(res.data()))
        .catch(err => console.log(err))
      getDocs(collection(DB, 'listings', id, 'urls'))
        .then(res => setUrls(res.docs.map(doc => ({'source': doc.id, ...doc.data()}))))
        .catch(err => console.log(err))
    }
  }, [id])

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

  if (Object.keys(listing).length < 1) return <></>
  return (
    <Container className='pb-5'>
      <BackBtn />
      <h1>{genStreetAddress(listing)}</h1>
      <h2>{genMunicipalityAddress(listing)}</h2>
      {urls.map(url => <ExternalSourceContainer data={url} />)}
    </Container>
  )
}

export default ListingDetail