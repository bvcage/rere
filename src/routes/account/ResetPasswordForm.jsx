import React from 'react'
import { Button, Container, FloatingLabel, Form, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { AUTH } from '../../firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'

function ResetPasswordForm (props) {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState("")

  function handleChange (e) {
    setEmail(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    sendPasswordResetEmail(AUTH, email)
      .then(() => navigate('/'))
      .catch(error => {
        console.log(error)
      })
  }
  
  return (
    <Container style={{maxWidth: 500}}>
      <Form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <h2>reset your password:</h2>
          <FloatingLabel label='Email'>
            <Form.Control
              name='email'
              placeholder=' '
              required
              type='email'
              value={email}
              onChange={handleChange}
            />
          </FloatingLabel>
          <Container fluid style={{textAlign: 'center'}}>
            <Button type='submit' style={{minWidth: '60%'}}>send reset instructions</Button>
            <p>New user? <a href='./signup'>Sign up here</a>.</p>
          </Container>
        </Stack>
      </Form>
    </Container>
  )
}

export default ResetPasswordForm