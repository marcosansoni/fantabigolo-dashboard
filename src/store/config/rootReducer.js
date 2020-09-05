import { combineReducers } from 'redux';
import settingsCombinedReducers from '../settings/settingsCombinedReducers';

export default combineReducers({
  settings: settingsCombinedReducers,
});
