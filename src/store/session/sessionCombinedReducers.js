import { combineReducers } from 'redux';
import username from './reducers/username';
import session from './reducers/session';
import isFetching from './reducers/isFetching';
import firstName from './reducers/firstName';
import lastName from './reducers/lastName';
import email from './reducers/email';

const sessionCombinedReducers = combineReducers({
  username,
  session,
  isFetching,
  firstName,
  lastName,
  email,
});

export default sessionCombinedReducers;
