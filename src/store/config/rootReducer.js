import { combineReducers } from 'redux';
import UserCombinedReducers from '../user/UserCombinedReducers';
import MessageCombinedReducers from '../message/MessageCombinedReducers';
import CombinedReducersUI from '../ui/combinedReducersUI';
import FriendCombinedReducers from '../friend/FriendCombinedReducers';
import FantaleagueCombinedReducers from '../fantaleague/FantaleagueCombinedReducers';
import FantateamCombinedReducers from '../fantateam/FantateamCombinedReducers';
import RealWorldCombinedReducers from '../realWorld/RealWorldCombinedReducers';
import commonCombineReducers from '../state/common/commonCombineReducers';
import authenticationCombineReducers from '../state/authentication/authenticationCombineReducers';

export default combineReducers({
  ui: CombinedReducersUI,
  message: MessageCombinedReducers,
  user: UserCombinedReducers,
  friend: FriendCombinedReducers,
  fantaleague: FantaleagueCombinedReducers,
  fantateam: FantateamCombinedReducers,
  realWorld: RealWorldCombinedReducers,
  common: commonCombineReducers,
  authentication: authenticationCombineReducers,
});
