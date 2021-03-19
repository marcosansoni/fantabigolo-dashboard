import { combineReducers } from 'redux';
import fetchReducer from './reducer/fetchReducer';
import sessionReducer from './reducer/sessionReducer';

const commonCombineReducers = combineReducers({
  fetch: fetchReducer,
  session: sessionReducer,
});

export default commonCombineReducers;
