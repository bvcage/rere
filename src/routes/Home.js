import React from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

import { AUTH } from '../firebaseConfig'
import { UNSPLASH_KEY, UNSPLASH_SECRET } from "../keys"

const UNSPLASH_URL = "https://api.unsplash.com"

function Home (props) {
  const [images, setImages] = React.useState([])
  const user = !!AUTH.currentUser ? AUTH.currentUser : null

  React.useEffect(() => {
    if (!!UNSPLASH_KEY && !!UNSPLASH_SECRET) {
      const query = new URLSearchParams({
        "collections": "4934758",
        "orientation": "landscape",
        "count": 5,
        "client_id": UNSPLASH_KEY
      })
      fetch(UNSPLASH_URL + "/photos/random?" + query)
        .then(res => {
          if (res.ok) res.json().then(setImages)
        })
    }
  }, [])

  const carouselItems = !!images[0]
    ? images.map(image => {
      console.log(image)
      return (
        <Carousel.Item style={{maxHeight: 600}}>
          <Image
            fluid
            className="my-auto d-block"
            src={image.urls.full}
            alt={image.alt_description}
          />
          <Carousel.Caption>
            <p>{image.user.name} via Unsplash</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    : null

  return (
    <Container fluid>
      <Carousel style={{height: 600}}>
        {carouselItems}
      </Carousel>
      <h1>Regarding: Real Estate</h1>
      <p>Love browsing real estate but wish there was a comment feature? Now there is!</p>
    </Container>
  )
}

export default Home