import { combineReducers } from 'redux';
import SessionActionType from '../../../session/SessionActionType';

const byId = (state = { }, action) => {
  switch (action.type) {
    case SessionActionType.POST_LOGIN:
      if (action?.payload?.realLeague?.byId) {
        return action.payload.realLeague.byId;
      }
      return state;
    case SessionActionType.POST_LOGOUT:
      return {};
    default:
      return state;
  }
};

const RealLeagueCombinedReducers = combineReducers({
  byId,
});

export default RealLeagueCombinedReducers;
