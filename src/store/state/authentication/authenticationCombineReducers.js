import { combineReducers } from 'redux';
import loginCombineReducers from './login/loginCombineReducers';
import registerCombineReducers from './register/registerCombineReducers';

const authenticationCombineReducers = combineReducers({
  login: loginCombineReducers,
  register: registerCombineReducers,
});

export default authenticationCombineReducers;
