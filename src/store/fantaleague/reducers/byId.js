import FantaleagueActionType from '../FantaleagueActionType';
import SessionActionType from '../../session/SessionActionType';

const byId = (state = { }, action) => {
  switch (action.type) {
    case FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME:
      if (action?.payload?.fantaleague?.byId) {
        return action.payload.fantaleague.byId;
      }
      return state;
    case SessionActionType.POST_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default byId;
