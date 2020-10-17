import FantaleagueActionType from '../FantaleagueActionType';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FantaleagueActionType.CREATE_FANTA_LEAGUE_REQUEST:
    case FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME_REQUEST:
      return true;
    case FantaleagueActionType.CREATE_FANTA_LEAGUE:
    case FantaleagueActionType.GET_FANTA_LEAGUE_BY_USERNAME:
      return false;
    default:
      return state;
  }
};

export default isFetching;
