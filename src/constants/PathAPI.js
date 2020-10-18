const PathAPI = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  USER: {
    ALL: '/user',
    FRIEND: '/user/friend',
    PARTICIPANT: '/user/partecipations',
  },
  FANTALEAGUE: {
    NEW: '/fantaleague/create',
    PARTICIPANT: '/fantaleague/partecipants',
    TEAM: '/fantaleague/teams',
    ADMIN: '/fantaleague/admin',
  },
  FANTATEAM: {
    TRAINER: '/fantateam/trainer',
    CASH: '/fantateam/cash',
    BALANCE: '/fantateam/balance',
    PLAYER: '/fantateam/players',
  },
  REAL_LEAGUE: {
    NAME: '/realLeague/name',
    NATION: '/realLeague/nation',
    LOGO: '/realLeague/logo',
    SEASON: '/realLeague/season',
    DATES: '/realLeague/dates',
    TEAMS: '/realLeague/teams',
  },
};

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export const urlFactory = (endpoint = '') => BASE_PATH + endpoint;

export default PathAPI;
