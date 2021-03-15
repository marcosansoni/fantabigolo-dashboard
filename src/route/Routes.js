const Routes = {
  AUTHENTICATION: {
    LOGIN: '/login',
    LOGOUT: '/logout',
    REGISTER: '/register',
  },
  HOME: '/',
  SETTINGS: '/settings',
  FANTALEAGUE: {
    LIST: '/fantaleague/list',
    HOME: '/fantaleague',
    NEW: '/fantaleague/new',
    HOME_LEAGUE: '/fantaleague/:leagueId',
  },
  REAL_WORLD: {
    HOME: '/real-world',
  },
};

export default Routes;
