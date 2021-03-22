import { combineReducers } from 'redux';
import fantaleagueNewCombineReducers from './fantaleagueNew/fantaleagueNewCombineReducers';

const fantaleagueCombineReducers = combineReducers({
  fantaleagueNew: fantaleagueNewCombineReducers,
});

export default fantaleagueCombineReducers;
