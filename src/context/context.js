import {createContext} from 'react';

const Context = createContext({
  loggedIn: false,
  user: {},
  login: (credentials) => {},
})

export default Context;