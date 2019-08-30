import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './types';

const login = (credentials, state) => {
  console.log('logging in');
  console.log(credentials);
  return {...state}
}


export default (state, action) => {
  switch(action.type){
    case LOGIN:
      return login(action.payload, state);
    default:
      return state;
  }
}
