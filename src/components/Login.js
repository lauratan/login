import React, {
  useState,
  useContext
}              from 'react';
import {
  Button,
  Container,
  Form
}              from 'react-bootstrap';
import Context from '../context/context.js';

const Login = () => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);

  console.log(context);
  return (
    <Container className="mt-3">
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            autoComplete="username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
          />
        </Form.Group>
        <Button>Log in</Button>
      </Form>
    </Container>
  )
}

export default Login;