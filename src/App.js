import React, {useReducer}    from 'react';
import Reducer                from './context/reducer';
import {
  LOGIN,
}                             from './context/types';
import Context                from './context/context.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Login                  from './components/Login';
import Test                   from './components/Test';


const App = () => {
  const initialState = {
    loginLoading: false,
    loggedIn: false,
    user: {
      username: '',
      password: ''
    },
  }
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  const login = (credentials) => {
    dispatch({
      type: LOGIN,
      payload: credentials
    })
  }

  return (
    <Context.Provider
      value={{
        loggedIn: state.loggedIn,
        user: state.user,
        login,
      }}
    >
       <BrowserRouter>
        <div id="router">
          <Route exact path="/" component={Login}/>
          <Route exact path="/test" component={Test}/>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
