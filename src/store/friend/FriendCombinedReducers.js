import { combineReducers } from 'redux';
import isFetching from './reducers/isFetching';

const FriendCombinedReducers = combineReducers({
  isFetching,
});

export default FriendCombinedReducers;
