const Routes = {
  AUTHENTICATION: {
    LOGIN: '/login',
    LOGOUT: '/logout',
    REGISTER: '/register',
  },
  HOME: '/',
  FANTALEAGUE: {
    LIST: '/fantaleague/list',
    HOME: '/fantaleague',
    NEW: '/fantaleague/new',
    HOME_LEAGUE: '/fantaleague/:leagueId',
    SETTINGS: {
      INDEX: '/fantaleague/:leagueId/settings',
      GENERAL: '/fantaleague/:leagueId/settings/general',
      GAME: '/fantaleague/:leagueId/settings/game',
    },
  },
};

export default Routes;
