const PathAPI = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  USER: {
    ALL: '/user',
    FRIENDS: '/user/friend',
  },
  FANTALEAGUE: {
    NEW: '/fantaleague/create',
  },
};

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export const urlFactory = (endpoint = '') => BASE_PATH + endpoint;

export default PathAPI;
