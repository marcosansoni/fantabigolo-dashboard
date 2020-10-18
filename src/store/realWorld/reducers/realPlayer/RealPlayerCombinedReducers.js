import { combineReducers } from 'redux';
import SessionActionType from '../../../session/SessionActionType';

const byId = (state = { }, action) => {
  switch (action.type) {
    case SessionActionType.POST_LOGIN:
      if (action?.payload?.realPlayer?.byId) {
        return action.payload.realPlayer.byId;
      }
      return state;
    case SessionActionType.POST_LOGOUT:
      return {};
    default:
      return state;
  }
};

const RealPlayerCombinedReducers = combineReducers({
  byId,
});

export default RealPlayerCombinedReducers;
