import FantaleagueActionType from '../FantaleagueActionType';

const byId = (state = false, action) => {
  switch (action.type) {
    case FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME:
      if (action?.payload?.byId) {
        return action.payload.byId;
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default byId;
