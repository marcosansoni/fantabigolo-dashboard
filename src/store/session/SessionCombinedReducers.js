import { combineReducers } from 'redux';
import username from './reducers/username';
import session from './reducers/session';
import isFetching from './reducers/isFetching';

const SessionCombinedReducers = combineReducers({
  username,
  session,
  isFetching,
});

export default SessionCombinedReducers;
