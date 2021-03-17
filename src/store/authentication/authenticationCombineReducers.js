import { combineReducers } from 'redux';
import loginCombineReducers from './login/loginCombineReducers';

const authenticationCombineReducers = combineReducers({
  login: loginCombineReducers,
});

export default authenticationCombineReducers;
