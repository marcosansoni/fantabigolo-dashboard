import { combineReducers } from 'redux';
import isFetching from './reducers/isFetching';
import firstName from './reducers/firstName';
import lastName from './reducers/lastName';
import email from './reducers/email';

const userCombinedReducers = combineReducers({
  isFetching,
  firstName,
  lastName,
  email,
});

export default userCombinedReducers;
