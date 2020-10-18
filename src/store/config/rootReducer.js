import { combineReducers } from 'redux';
import UserCombinedReducers from '../user/UserCombinedReducers';
import MessageCombinedReducers from '../message/MessageCombinedReducers';
import SessionCombinedReducers from '../session/SessionCombinedReducers';
import SettingCombinedReducers from '../setting/SettingCombinedReducers';
import FriendCombinedReducers from '../friend/FriendCombinedReducers';
import FantaleagueCombinedReducers from '../fantaleague/FantaleagueCombinedReducers';
import FantateamCombinedReducers from '../fantateam/FantateamCombinedReducers';
import RealWorldCombinedReducers from '../realWorld/RealWorldCombinedReducers';

export default combineReducers({
  setting: SettingCombinedReducers,
  session: SessionCombinedReducers,
  message: MessageCombinedReducers,
  user: UserCombinedReducers,
  friend: FriendCombinedReducers,
  fantaleague: FantaleagueCombinedReducers,
  fantateam: FantateamCombinedReducers,
  realWorld: RealWorldCombinedReducers,
});
