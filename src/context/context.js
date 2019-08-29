import {createContext} from 'react';

const Context = createContext({
  loggedIn: false,
  user: {},
  login: (credentials) => {},
  testLog: (arg) => {}
})

export default Context;