import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import Context from '../context/context.js';

const Login = () => {
  const context = useContext(Context);
  console.log(context);
  return (
    <div>
      <h4>hello world</h4>
      <Button onClick={()=> context.testLog('hi')}>Test</Button>
    </div>
  )
}

export default Login;