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
  RULES: {
    STATE: '/rules/general/state',
  },
  REAL_LEAGUE: {
    NAME: '/realLeague/name',
    NATION: '/realLeague/nation',
    LOGO: '/realLeague/logo',
    SEASON: '/realLeague/season',
    DATES: '/realLeague/dates',
    TEAMS: '/realLeague/teams',
  },
  REAL_TEAM: {
    LEAGUE: '/team/league',
    COUNTRY: '/team/country',
    FOUNDED: '/team/founded',
    LOGO: '/team/logo',
    CITY: '/team/city',
    STADIUM: '/team/stadium',
    PLAYERS: '/team/players',
  },
  REAL_PLAYER: {
    NAME: '/realPlayer/name',
    BIRTH: '/realPlayer/birth',
    BIRTHPLACE: '/realPlayer/birthPlace',
    NATION: '/realPlayer/nation',
    TEAM: '/realPlayer/team',
    ROLE: '/realPlayer/role',
    HEIGHT: '/realPlayer/height',
    WEIGHT: '/realPlayer/weight',
  },
};

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export const urlFactory = (endpoint = '') => BASE_PATH + endpoint;

export default PathAPI;
