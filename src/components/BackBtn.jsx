import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function BackBtn () {
  const navigate = useNavigate()
  return (
    <Button variant='outline-primary' onClick={()=>navigate(-1)}>go back</Button>
  )
}

export default BackBtn