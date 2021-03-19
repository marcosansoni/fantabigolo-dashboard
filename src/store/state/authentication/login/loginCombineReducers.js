import { combineReducers } from 'redux';
import loginErrorsReducer from './reducer/loginErrorsReducer';

const loginCombineReducers = combineReducers({
  errors: loginErrorsReducer,
});

export default loginCombineReducers;
