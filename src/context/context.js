import {createContext} from 'react';

const Context = createContext({
  loggedIn: false,
  user: {},
  login: (credentials) => {},
  loginInfo: (data) => {}
})

export default Context;