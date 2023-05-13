import React from 'react'
import { Button, Container, FloatingLabel, Form, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { AUTH } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

const BLANK_LOGIN = {
  email: '',
  password: '',
}

function LoginForm (props) {
  const navigate = useNavigate()
  const [login, setLogin] = React.useState(BLANK_LOGIN)

  function handleChange (e) {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  function handleSubmit (e) {
    e.preventDefault()
    signInWithEmailAndPassword(AUTH, login.email, login.password)
      .then(uCred => navigate('/'))
      .catch(error => {
        console.log(error)
      })
  }
  
  return (
    <Container style={{maxWidth: 500}}>
      <Form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <h2>login to your account:</h2>
          <FloatingLabel label='Email'>
            <Form.Control
              name='email'
              placeholder=' '
              required
              type='email'
              value={login.email}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label='Password'>
            <Form.Control
              name='password'
              placeholder=' '
              required
              type='password'
              value={login.password}
              onChange={handleChange}
            />
          </FloatingLabel>
          <Container fluid style={{textAlign: 'center'}}>
            <Button type='submit' style={{minWidth: '60%'}}>login</Button>
            <p>New user? <a href='./signup'>Sign up here</a>.</p>
          </Container>
        </Stack>
      </Form>
    </Container>
  )
}

export default LoginForm