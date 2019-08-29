import { LOGIN, TEST } from './types';

const login = (credentials, state) => {
  console.log('logging in');
  return {...state}
}

const testLog = (arg, state) => {
  console.log('testing testing 123');
  const newState = {
    ...state,
    user: {
      test: arg
    },
    loggedIn: true
  }
  return {...newState}
}

export default (state, action) => {
  switch(action.type){
    case LOGIN:
      return login(action.payload, state);
    case TEST:
      return testLog(action.payload, state);
    default:
      return state;
  }
}
