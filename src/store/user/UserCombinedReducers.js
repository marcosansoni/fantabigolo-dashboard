import { combineReducers } from 'redux';
import isFetching from './reducers/isFetching';
import firstName from './reducers/firstName';
import lastName from './reducers/lastName';
import email from './reducers/email';

const UserCombinedReducers = combineReducers({
  isFetching,
  firstName,
  lastName,
  email,
});

export default UserCombinedReducers;
