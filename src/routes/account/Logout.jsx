import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { AUTH } from '../../firebaseConfig'

function Logout (props) {
  const navigate = useNavigate()
  
  React.useEffect(() => {
    AUTH.signOut().then(() => navigate('/'))
  }, [navigate])

  return (
    <Container>
      <p>Logging out...</p>
    </Container>
  )
}

export default Logout