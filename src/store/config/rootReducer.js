import { combineReducers } from 'redux';
import commonCombineReducers from '../state/common/commonCombineReducers';
import authenticationCombineReducers from '../state/authentication/authenticationCombineReducers';
import navbarCombineReducers from '../state/navbar/navbarCombineReducers';
import fantaleagueCombineReducers from '../state/fantaleague/fantaleagueCombineReducers';

export default combineReducers({
  common: commonCombineReducers,
  authentication: authenticationCombineReducers,
  navbar: navbarCombineReducers,
  fantaleague: fantaleagueCombineReducers,
});
