import React from 'react'
import { Button, Container, FloatingLabel, Form, Stack } from 'react-bootstrap'

const BLANK_USER = {
  'first': '',
  'last': '',
  'email': '',
  'password': '',
  'password2': '',
}

function SignupForm (props) {
  const [signup, setSignup] = React.useState(BLANK_USER)
  const [validated, setValidated] = React.useState(false)

  function handleChange (e) {
    setSignup({...signup, [e.target.name]: e.target.value})

    // custom validation for matching passwords
    if (e.target.name === 'password2') {
      if (e.target.value !== signup.password) {
        e.target.setCustomValidity('Passwords do not match.')
      } else {
        e.target.setCustomValidity('')
      }
    }
  }

  function handleSubmit (e) {
    e.preventDefault()

    console.log(/^(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$/.test(signup.password))

    if (e.target.checkValidity()) {
      console.log('form valid')
    }
    setValidated(true)
  }

  return (
    <Container style={{maxWidth: 500}}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Stack gap={2}>
          <h2>create an account:</h2>
          <FloatingLabel label='First name'>
            <Form.Control
              name='first'
              pattern="^[A-z]+([' \-]*[A-z]+)*$"
              placeholder=' '
              required
              type='text'
              value={signup.first}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label='Last name'>
            <Form.Control
              name='last'
              pattern="^[A-z]+([' \-]*[A-z]+)*$"
              placeholder=' '
              required
              type='text'
              value={signup.last}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label='Email'>
            <Form.Control
              name='email'
              placeholder=' '
              required
              type='email'
              value={signup.email}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label='Password'>
            <Form.Control
              name='password'
              placeholder=' '
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$"
              required
              type='password'
              value={signup.password}
              onBlur={() => setSignup({...signup, password2: ''})}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label='Confirm password'>
            <Form.Control
              name='password2'
              placeholder=' '
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$"
              required
              type='password'
              value={signup.password2}
              onChange={handleChange}
            />
          </FloatingLabel>
          <Container fluid style={{textAlign: 'center'}}>
            <Button type='submit' style={{minWidth: '60%'}}>submit</Button>
            <p>Already have an account? <a href='./login'>Sign in here</a>.</p>
          </Container>
        </Stack>
      </Form>
    </Container>
  )
}

export default SignupForm