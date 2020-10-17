import { combineReducers } from 'redux';
import isFetching from './reducers/isFetching';
import byId from './reducers/byId';

const FantaleagueCombinedReducers = combineReducers({
  isFetching,
  byId,
});

export default FantaleagueCombinedReducers;
