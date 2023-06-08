import React from 'react'
import { Button, Container, Image, Stack } from 'react-bootstrap'

function ExternalSourceContainer (props) {
  const { data } = props
  const { source, url, photos } = data

  const Images = !!photos
    ? photos.map(url => <Image fluid src={url} />)
    : null

  return (
    <Container className='p-0'>
      <h3>{source} <Button variant='outline-secondary' size='sm' onClick={()=>window.open(url)}>open</Button></h3>
      <Container>
        <Stack direction='horizontal' style={{overflowX: 'auto'}}>
          {Images}
        </Stack>
      </Container>
    </Container>
  )
}

export default ExternalSourceContainer