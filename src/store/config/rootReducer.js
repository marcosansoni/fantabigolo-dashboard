import { combineReducers } from 'redux';
import settingsCombinedReducers from '../settings/settingsCombinedReducers';
import sessionCombinedReducers from '../session/sessionCombinedReducers';
import messageCombinedReducers from '../message/messageCombinedReducers';
import userCombinedReducers from '../user/userCombinedReducers';

export default combineReducers({
  settings: settingsCombinedReducers,
  session: sessionCombinedReducers,
  message: messageCombinedReducers,
  user: userCombinedReducers,
});
