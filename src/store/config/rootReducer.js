import { combineReducers } from 'redux';
import UserCombinedReducers from '../user/UserCombinedReducers';
import MessageCombinedReducers from '../message/MessageCombinedReducers';
import SessionCombinedReducers from '../session/SessionCombinedReducers';
import CombinedReducersUI from '../ui/combinedReducersUI';
import FriendCombinedReducers from '../friend/FriendCombinedReducers';
import FantaleagueCombinedReducers from '../fantaleague/FantaleagueCombinedReducers';
import FantateamCombinedReducers from '../fantateam/FantateamCombinedReducers';
import RealWorldCombinedReducers from '../realWorld/RealWorldCombinedReducers';

export default combineReducers({
  ui: CombinedReducersUI,
  session: SessionCombinedReducers,
  message: MessageCombinedReducers,
  user: UserCombinedReducers,
  friend: FriendCombinedReducers,
  fantaleague: FantaleagueCombinedReducers,
  fantateam: FantateamCombinedReducers,
  realWorld: RealWorldCombinedReducers,
});
