import { combineReducers } from 'redux';
import fantaleagueNewErrorsReducer from './reducer/fantaleagueNewErrorsReducer';

const fantaleagueNewCombineReducers = combineReducers({
  errors: fantaleagueNewErrorsReducer,
});

export default fantaleagueNewCombineReducers;
