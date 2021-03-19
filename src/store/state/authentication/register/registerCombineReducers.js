import { combineReducers } from 'redux';
import registerErrorsReducer from './reducer/registerErrorsReducer';

const registerCombineReducers = combineReducers({
  errors: registerErrorsReducer,
});

export default registerCombineReducers;
