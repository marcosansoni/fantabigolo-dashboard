export const CREATE_FANTA_LEAGUE_REQUEST = 'CREATE_FANTA_LEAGUE_REQUEST';
export const CREATE_FANTA_LEAGUE = 'CREATE_FANTA_LEAGUE';

const createFantaLeagueCreator = (payload) => ({
  type: CREATE_FANTA_LEAGUE_REQUEST,
  payload,
});

export default createFantaLeagueCreator;
