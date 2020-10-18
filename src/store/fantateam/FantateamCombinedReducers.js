import { combineReducers } from 'redux';
import byId from './reducers/byId';

const FantateamCombinedReducers = combineReducers({
  byId,
});

export default FantateamCombinedReducers;
