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
import {login} from '../utils';


const Login = () => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    setError();
    setLoading(true);
    try {
      await login(user);
      console.log('logged in');
      setLoading(false);
    }
    catch(error) {
      setError('Error logging in');
      setLoading(false);
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
        {error && <p style={{color: 'red'}}>{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in': 'Log In'}
        </Button>
      </Form>
    </Container>
  )
}

export default Login;