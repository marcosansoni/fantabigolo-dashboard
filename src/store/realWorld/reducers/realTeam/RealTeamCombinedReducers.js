import { combineReducers } from 'redux';
import SessionActionType from '../../../session/SessionActionType';

const byId = (state = { }, action) => {
  switch (action.type) {
    case SessionActionType.POST_LOGIN:
      if (action?.payload?.realTeam?.byId) {
        return action.payload.realTeam.byId;
      }
      return state;
    case SessionActionType.POST_LOGOUT:
      return {};
    default:
      return state;
  }
};

const RealTeamCombinedReducers = combineReducers({
  byId,
});

export default RealTeamCombinedReducers;
