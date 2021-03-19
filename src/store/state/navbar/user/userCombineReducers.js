import { combineReducers } from 'redux';
import userErrorsReducer from './reducer/userErrorsReducer';
import userReducer from './reducer/userReducer';

const userCombineReducers = combineReducers({
  errors: userErrorsReducer,
  user: userReducer,
});

export default userCombineReducers;
