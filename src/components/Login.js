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
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await context.login(user)
      setLoading(false);
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <Container className="mt-3">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            autoComplete="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </Form.Group>
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in': 'Log In'}
        </Button>
      </Form>
    </Container>
  )
}

export default Login;